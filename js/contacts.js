/**
 * Created by Administrator on 2016/10/30.
 */
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

(function () {
    "use strict";
    var object = contacts.addressBook,
        contactsCount = object.length,
        target = document.getElementsByTagName('body')[0],
        i;
    if (contactsCount > 0){
        for (i = 0; i < contactsCount; i++){
            var item = object[i],
                name = item.name,
                email = item.email;
            target.innerHTML += '<p><a href="mailto:' + email + '">' + name + '</a></p>';
        }
    }
})();