pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

var jsonData = pm.response.json();
var schema = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    ....
}

var result = tv4.validateMultiple(jsonData, schema);
if (result.valid) {
    pm.test('Schema is valid', function() {
        pm.expect(result.valid).to.be.true;
    });
} 
else {
    pm.test('Schema is not valid', function() {
        pm.expect(result.valid).to.be.true;
    });
    console.error(result.errors[0].message);
    console.log('Error in JSON on line:', result.errors[0].dataPath.slice(1));
    console.log('Error in JSONSchema on line:', result.errors[0].schemaPath);
    console.log('subErrors:', result.errors[0].subErrors);
    console.log('code:', result.errors[0].code);
};
