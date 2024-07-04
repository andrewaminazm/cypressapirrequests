describe('API Test for PUT /users/2', () => {
    it('should update the user data', () => {
      const updatedUser = {
        name: 'Jane Doe',
        job: 'Software Developer'
      };
  
      cy.request({
        method: 'PUT',
        url: 'https://reqres.in/api/users/2',
        body: updatedUser,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('name', updatedUser.name);
        expect(response.body).to.have.property('job', updatedUser.job);
        expect(response.body).to.have.property('updatedAt').and.be.a('string');
      });
    });
  });