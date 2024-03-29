//UI Module: get input values, add the new item to UI, update UI
//Data module: Add new item to data structure, calculate budget
//Controller module: Add event handler, this module acts as a link between UI and data module

//Module pattern
//BUDGET CONTROLLER
var budgetController = (function() {
  //private add method

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  };

  Expense.prototype.calcPercentage = function(totalIncome) {
    if (totalIncome > 0) {
      //this.value is the object that is prefixed when calling this function i.e. the current in current.calcPercentage(data.totals.inc);
      this.percentage = Math.round((this.value / totalIncome) * 100);
    } else {
      this.percentage = -1;
    }
  };

  Expense.prototype.getPercentage = function() {
    return this.percentage;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  // var allExpenses = [];
  // var allIncomes = [];
  // var totalExpenses = 0;
  // var totalIncomes = 0;

  var calculateTotal = function(type) {
    var sum = 0;
    data.allItems[type].forEach(function(current) {
      sum += current.value;
    });

    data.totals[type] = sum;


  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  }

  return {
    addItem: function(type, des, val) {
      var newItem, ID;
      ID = 0;
      //we want ID = last ID + 1

      //Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }


      //create new item based on 'inc' or 'exp' type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      //Push it into our data structure
      data.allItems[type].push(newItem);
      //return new Element
      return newItem;
    },
    deleteItem: function(type, id) {
      // id = 3
      var ids, index;

      //map is like foreach but always returns new array
      //we need to do this to isolate the ids into their own array
      //because currently they are in an Income and Expense object inside of an array
      ids = data.allItems[type].map(function(current) {
        return current.id;
      });

      index = ids.indexOf(id);


      if (index !== -1) {
        data.allItems[type].splice(index, 1); //splice removes the element in the array

      }

    },
    calculateBudget: function() {
      //calculate total income and expenses
      calculateTotal('exp');
      calculateTotal('inc');

      //calculate the budget: income - expenses
      data.budget =  data.totals.inc - data.totals.exp;

      //calculate the percentage of income that we spend
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }


    },
    calculatePercentages: function() {
      /*
      3 expenses
      a = 20
      b = 10
      c = 40
      income = 100
      a = 20 / 100 = 20%
      b = 10 / 100 = 10%
      c = 40 / 100 = 40%
      */

      data.allItems.exp.forEach(function(current) {
        current.calcPercentage(data.totals.inc);
      });
    },
    getPercentages: function() {
      var allPercentages = data.allItems.exp.map(function(current) {
        return current.getPercentage();
      });
      return allPercentages;
    },
    getBudget: function() {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      };
    },
    testing: function() {
      console.log(data);
    }
  };

})();




var UIController = (function() {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn',
    incomeContainer: '.income__list',
    expenseContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expenseLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage',
    container: '.container',
    expensesPercentageLabel: '.item__percentage',
    dateLabel: '.budget__title--month'
  };

  var formatNumber = function(num, type) {
    var numSplit, int, dec;
    /*
    + or - before number
    exactly 2 decimal points
    comma separating the thousands
    2310.4567 -> + 2,310.46
    2000 -> + 2,000.00
    */
    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');

    int = numSplit[0];
    dec = numSplit[1];

    if (int.length > 6) {
      int = int.substr(0, int.length - 6) + ',' + int.substr(int.length - 6, 3) + ',' + int.substr(int.length - 3, 3);
    } else if (int.length > 3) {
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    dec = numSplit[1];
    return (type === 'exp' ?  '-' : '+') + ' ' + int + '.' + dec;

  };

  var nodeListForEach = function(list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  };

  return {
    getinput: function() {
      return {
        //will be either inc or exp
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      };

    },
    addListItem: function(obj, type) {
      var html, newHTML, element;
      // Create HTML string with placeholder text

      if (type === 'inc') {
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        element = DOMstrings.expenseContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
      }

      // Replace placeholder text with some actual Data
      newHTML = html.replace('%id%', obj.id);
      newHTML = newHTML.replace('%description%', obj.description);
      newHTML = newHTML.replace('%value%', formatNumber(obj.value, type));

      // Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHTML);

    },
    deleteListItem: function(selectorID) {
      var el = document.getElementById(selectorID);
      //we can't remove element directly, only child elements
      //so here we do a strange thing by traversing to parent and then deleting child
      el.parentNode.removeChild(el);

    },
    clearFields: function() {
      var fields, fieldsArr;
      //this querySelectorAll returns a list and not an array so we need to convert
      fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);

      fieldsArr = Array.prototype.slice.call(fields);

      //forEach has this anonymous function with current element, the index and the whole array
      fieldsArr.forEach(function (current, index, array) {
        current.value = "";
      });

      //sets the cursor right back to the description portion
      fieldsArr[0].focus();
    },
    displayBudget: function(obj) {
      var type;
      obj.budget > 0 ? type = 'inc' : type = 'exp';
      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
      document.querySelector(DOMstrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');
      //don't display percentage if it's not greater than 0
      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }
    },
    displayPercentages: function(percentages) {
      //this returns a nodeList
      var fields = document.querySelectorAll(DOMstrings.expensesPercentageLabel);

      nodeListForEach(fields, function(current, index) {
        //Do stuff
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = '---';
        }

      });


    },
    displayMonth: function() {
      var now, year, months, month;
      now = new Date();
      //var christmas = new Date(2016, 11, 25);
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      month = now.getMonth();
      year = now.getFullYear();
      document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;


    },
    changedType: function() {
      var fields = document.querySelectorAll(
        DOMstrings.inputType + ',' +
        DOMstrings.inputDescription + ',' +
        DOMstrings.inputValue);

        nodeListForEach(fields, function(current) {
          current.classList.toggle('red-focus');
        });

        document.querySelector(DOMstrings.inputButton).classList.toggle('red');
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  }

})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
      //event.which is for older browsers
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    //this is using event delegation by putting the listener on the outermost div that is a parent to both
    //the income and expense divs so we can handle deleting items from both with just one event listener
    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);

  };

  var updatePercentages = function() {
    //1. Calculate percentages
    budgetCtrl.calculatePercentages();

    //2. Read percentages from the budget controller
    var percentages = budgetCtrl.getPercentages();

    //3. Update the UI with new percentages
    UICtrl.displayPercentages(percentages);
  };

  var updateBudget = function() {
    // 1. Calculate the budget
    budgetCtrl.calculateBudget();

    // 2. return the budget
    var budget = budgetCtrl.getBudget();

    // 3. Display the budget on the UI
    UICtrl.displayBudget(budget);
  };

  var ctrlAddItem = function() {
    var input, newItem;
    // 1. Get the field input Data
    input = UICtrl.getinput();

    //only add items if description and value are both not empty
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to the budget CONTROLLER
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);
      // 3. Add the new item to the UI
      UICtrl.addListItem(newItem, input.type);
      // 4. clear the fields
      UICtrl.clearFields();
      // 5. Calculate and update budget__title
      updateBudget();

      // 6. Calculate and update percentages
      updatePercentages();
    }


  };

  var ctrlDeleteItem = function(event) {
    var itemID, splitID, type, ID;
    //traverses through DOM by going up to get the unique id for each income/expense div
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      //inc-1 is an example of what ID will look like
      splitID = itemID.split('-');
      type = splitID[0]; //will either be inc or exp
      ID = parseInt(splitID[1]);

      // 1. delete the item from data Structure
      budgetCtrl.deleteItem(type, ID);

      // 2. Delete item from the UI
      UICtrl.deleteListItem(itemID);

      // 3. Update and show new budget
      updateBudget();

      // 4. Calculate and update percentages
      updatePercentages();
    }

  };

  return {
    init: function() {
      console.log('Application has started');
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });
      setupEventListeners();
    }
  };

})(budgetController, UIController);


controller.init();
