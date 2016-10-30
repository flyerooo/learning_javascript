/**
 * Created by Administrator on 2016/10/30.
 */
(function () {
    "use strict";
    var contacts = {
        "addressBook" : [
            {
                "name": "hillisha",
                "email": "hill@example.com",
            },
            {
                "name": "paul",
                "email": "cleveland@example.com",
            },
            {
                "name": "vishaal",
                "email": "vish@example.com",
            },
            {
                "name": "mike",
                "email": "grady@example.com",
            },
            {
                "name": "jamie",
                "email": "dusted@example.com",
            }
        ]
    };
    var searchForm = document.getElementById('search-form'),
        searchField = document.getElementById('q'),
        getAllButton = document.getElementById('get-all'),
        count = contacts.addressBook.length,
        target = document.getElementById('output');
    var addr = {
        search: function (event) {
            var searchValue = searchField.value,
                i;
            event.preventDefault();
            target.innerHTML = '';
            if (count > 0 && searchValue !== '') {
                for (i=0; i < count; i++){
                    var obj = contacts.addressBook[i],
                        isItFound = obj.name.indexOf(searchValue);
                    if (isItFound !== -1){
                        target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
                    }
                }
            }
        },
        getAllContacts: function () {
            var i;
            target.innerHTML ='';
            if (count>0){
                for (i=0;i<count; i++){
                    var obj = contacts.addressBook[i];
                    target.innerHTML += '<p>' + obj.name + ', <a href="mailto:' + obj.email + '">'+ obj.email +'</a><p>';
                }
            }
        },
        setActiveSection: function () {
            this.parentNode.setAttribute('class','active');
        },
        removeActiveSection: function () {
            this.parentNode.removeAttribute('class');
        },
        addHoverClass: function () {
            searchForm.setAttribute('class','hovering');
        },
        removeHoverClass: function () {
            searchForm.removeAttribute('class');
        }
    };
    searchField.addEventListener('keyup', addr.search, false);
    searchField.addEventListener('focus',addr.setActiveSection, false);
    searchField.addEventListener('blur',addr.removeActiveSection,false);
    getAllButton.addEventListener('click',addr.getAllContacts,false);
    searchForm.addEventListener('mouseover',addr.addHoverClass,false);
    searchForm.addEventListener('mouseout',addr.removeHoverClass,false);
    searchForm.addEventListener('submit',addr.search,false);


})();