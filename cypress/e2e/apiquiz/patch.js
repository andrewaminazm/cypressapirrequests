describe('API Test for PATCH /users/2', () => {
    it('should partially update the user data', () => {
      const partialUpdate = {
        job: 'Product Manager'
      };
  
      cy.request({
        method: 'PATCH',
        url: 'https://reqres.in/api/users/2',
        body: partialUpdate,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('job', partialUpdate.job);
        expect(response.body).to.have.property('updatedAt').and.be.a('string');
      });
    });
  });
  