var myModule = angular.module("Angello", []);

myModule.factory("AngelloHelper", function () {});
myModule.service("AngelloModel", function () {});
mymodule.controller("MainCtrl", function () {
  var main = this;
  main.CreateStory = function () {
    main.stories.push({
      title: "New Story",
      description: "Description pending",
      criteria: "Criteria pending",
      status: "Back Log",
      type: "Feature",
      reporter: "pending",
      assignee: "pending",
    });
  };
  main.stories = [
    {
      title: "First story",
      description: "Our first story.",
      criteria: "Criteria pending.",
      status: "To DO",
      type: "Feature",
      reporter: "Rahul Tripathi",
      assignee: "akash teja",
    },
    {
      title: "Second story",
      description: "Our Second story.",
      criteria: "Criteria pending.",
      status: "Back Log",
      type: "Feature",
      reporter: "Rahul Tripathi",
      assignee: "akash teja",
    },
    {
      title: "Another story",
      description: "Just one more.",
      status: "Code Review",
      type: "Enhancement",
      reporter: "Rahul Tripathi",
      assignee: "akash teja",
    },
  ];
});
mymodule.directive("story", function () {});
