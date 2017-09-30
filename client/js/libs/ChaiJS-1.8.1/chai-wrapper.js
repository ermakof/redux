define(
    [  "libs/ChaiJS-1.8.1/chai", "libs/ChaiJS-1.8.1/chai-options"],
    function (chai, options) {

        if (options.enable) return chai;

        var chai_fake = {

            expect: function(){
                return this;
            },

            a:function(){
                return this;
            },

            addProperty:function(){
                return this;
            },

            overwriteMethod:function(){
                return this;
            },

            addMethod:function(){
                return this;
            },

            instanceof:function(){
                return this;
            },

            instanceOf:function(){
                return this;
            },

            instanceof:function(){
                return this;
            },

            instanceOf:function(){
                return this;
            },

            structureof:function(){
                return this;
            },

            structureOf:function(){
                return this;
            },

            least:function(){
                return this;
            },

            property:function(){
                return this;
            },

            length: function(){
                return this;
            },

            keys: function(){
                return this;
            },

            equal: function(){
                return this;
            },

            most: function(){
                return this;
            }
        };

        chai_fake.is = chai_fake;
        chai_fake.and = chai_fake;
        chai_fake.exist = chai_fake;
        chai_fake.not = chai_fake;
        chai_fake.empty = chai_fake;
        chai_fake.Assertion = chai_fake;
        chai_fake.that = chai_fake;
        chai_fake.have = chai_fake;
        chai_fake.contain = chai_fake;

        return chai_fake;
    }
);