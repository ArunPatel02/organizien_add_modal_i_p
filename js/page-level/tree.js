$(window).on("load",function(){

      $("#jstree").jstree({
            'core' : {
                  'data' : [
                        { "id" : "ajson1", "parent" : "#", "text" : "Asia", "icon" : false },
                        { "id" : "ajson2", "parent" : "ajson1", "text" : "Russia", "icon" : false  },
                        { "id" : "ajson3", "parent" : "ajson1", "text" : "China", "icon" : false  },
                        { "id" : "ajson4", "parent" : "ajson1", "text" : "Malaysia", "icon" : false  },
                        { "id" : "ajson5", "parent" : "ajson1", "text" : "Japan", "icon" : false  },
                        { "id" : "ajson6", "parent" : "ajson1", "text" : "Pakistan", "icon" : false  },
                        { "id" : "ajson7", "parent" : "ajson1", "text" : "Afghanistan", "icon" : false  },
                        { "id" : "ajson8", "parent" : "ajson1", "text" : "India", "icon" : false  },
                        { "id" : "ajson9", "parent" : "#", "text" : "Europe", "icon" : false  },
                        { "id" : "ajson10", "parent" : "ajson9", "text" : "Germany", "icon" : false  },
                        { "id" : "ajson11", "parent" : "ajson9", "text" : "United Kingdom", "icon" : false  },
                        { "id" : "ajson12", "parent" : "ajson9", "text" : "France", "icon" : false  },
                        { "id" : "ajson13", "parent" : "ajson9", "text" : "Spain", "icon" : false  },
                        { "id" : "ajson14", "parent" : "ajson9", "text" : "Switzerland", "icon" : false  },
                        { "id" : "ajson15", "parent" : "ajson9", "text" : "Greece", "icon" : false  },
                        { "id" : "ajson16", "parent" : "ajson9", "text" : "Poland", "icon" : false  },
                        { "id" : "ajson17", "parent" : "#", "text" : "Africa", "icon" : false  },
                        { "id" : "ajson18", "parent" : "ajson17", "text" : "South Africa", "icon" : false  },
                        { "id" : "ajson19", "parent" : "ajson17", "text" : "Nigeria", "icon" : false  },
                        { "id" : "ajson20", "parent" : "ajson17", "text" : "Kenya", "icon" : false  },
                        { "id" : "ajson21", "parent" : "ajson17", "text" : "Morocco", "icon" : false  },
                        { "id" : "ajson22", "parent" : "ajson17", "text" : "Ghana", "icon" : false  },
                        { "id" : "ajson23", "parent" : "ajson17", "text" : "Algeria", "icon" : false  },
                        { "id" : "ajson24", "parent" : "ajson17", "text" : "Ethopia", "icon" : false  }
                  ]
            },
            "checkbox" : {
                  "keep_selected_style" : false
            },
            "plugins" : [ "wholerow", "checkbox" ]
      });

})
