describe('Add new device using API', () => {
    const apiEndpoint = 'https://api.restful-api.dev/objects';
    const newDevicePayload = {
      "name": "Apple Max Pro 1TB",
      "data": {
        "year": 2023,
        "price": 7999.99,
        "CPU model": "Apple ARM A7",
        "Hard disk size": "1 TB"
      }
    };
  
    it('should add a new device and validate the response', () => {
      cy.request({
        method: 'POST',
        url: apiEndpoint,
        body: newDevicePayload,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
         // Log request and response details to the console
      cy.log('Request URL:', apiEndpoint);
      cy.log('Request Payload:', newDevicePayload);
      cy.log('Response:', response);
     
        // Validate status code
        expect(response.status).to.eq(200);
  
        // Validate response body
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('name', newDevicePayload.name);
        expect(response.body).to.have.property('createdAt');
        expect(response.body.data).to.deep.equal(newDevicePayload.data);
  
        // Validate id and createdAt are not null
        expect(response.body.id).to.not.be.null;
        expect(response.body.createdAt).to.not.be.null;
  
        // Additional validations
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('year', newDevicePayload.data.year);
        expect(response.body.data).to.have.property('price', newDevicePayload.data.price);
        expect(response.body.data).to.have.property('CPU model', newDevicePayload.data['CPU model']);
        expect(response.body.data).to.have.property('Hard disk size', newDevicePayload.data['Hard disk size']);
      });
    });
  });
  