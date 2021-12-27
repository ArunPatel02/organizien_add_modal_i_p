$(window).on("load",function(){



      let  json = [
            {
                  "id": "5ce8ea0766d51a082c8a8910",
                  "disabled": false,
                  "groupId": 3,
                  "groupName": "Manager",
                  "name": "Britney Battle",
                  "selected": false
            },
            {
                  "id": "5ce8ea073f376c3aec341002",
                  "disabled": false,
                  "groupId": 3,
                  "groupName": "Manager",
                  "name": "Ollie Cunningham",
                  "selected": false
            },
            {
                  "id": "5ce8ea07a3f2b703b91d7bb6",
                  "disabled": false,
                  "groupId": 3,
                  "groupName": "Manager",
                  "name": "Bernice Fuentes",
                  "selected": false
            },
            {
                  "id": "5ce8ea0767ef46b7e050be42",
                  "disabled": false,
                  "groupId": 2,
                  "groupName": "Director",
                  "name": "Geneva Brennan",
                  "selected": false
            },
            {
                  "id": "5ce8ea074684f15d82292e02",
                  "disabled": true,
                  "groupId": 1,
                  "groupName": "Ceo",
                  "name": "Isabelle Reeves",
                  "selected": false
            },
            {
                  "id": "5ce8ea07d75d0ab28bb12913",
                  "disabled": false,
                  "groupId": 1,
                  "groupName": "Ceo",
                  "name": "Doreen Carr",
                  "selected": false
            },
            {
                  "id": "5ce8ea07c41f5ca640e3eeca",
                  "disabled": false,
                  "groupId": 1,
                  "groupName": "Ceo",
                  "name": "Janet Parks",
                  "selected": true
            }
      ];

      $('.dropdown-mul-1').dropdown({
            data: json,
            limitCount: 40,
            multipleMode: 'label',
            input: '<input type="text" maxLength="20" placeholder="Search">',
            choice: function () {
                  // console.log(arguments,this);
            }
      });

})
