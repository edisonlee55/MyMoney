/*!
 * MyMoney - main.js v.1.0
 * Copyright 2017 Edison Lee (MING-CHIEN LEE)
 */
$('.ui.dropdown')
    .dropdown()
;
var fdb = new ForerunnerDB();
var db = fdb.db("MyMoneyDB");
var collection = db.collection("MyMoneyCollection");
collection.load();