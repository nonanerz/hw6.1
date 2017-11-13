function Person(firstName, lastName) {

    var _firstName = firstName;
    var _lastName = lastName;

    this.getFirstName = function() {
        return _firstName;
    }

    this.setFirstName = function(firstName) {
        return _firstName = firstName;
    }

    this.getLastName = function() {
        return _lastName;
    }

    this.setLastName = function(lastName) {
        return _lastName = lastName;
    }
}