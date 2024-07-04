describe('API Test for GET /users?page=2', () => {
    it('should return a list of users for page 2', () => {
      cy.request('GET', 'https://reqres.in/api/users?page=2')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('page', 2);
          expect(response.body).to.have.property('data').and.be.an('array');
  
          // Optional: Additional checks for the user data
          response.body.data.forEach(user => {
            expect(user).to.have.property('id').and.be.a('number');
            expect(user).to.have.property('email').and.be.a('string');
            expect(user).to.have.property('first_name').and.be.a('string');
            expect(user).to.have.property('last_name').and.be.a('string');
            expect(user).to.have.property('avatar').and.be.a('string');
          });
        });
    });
  });
  