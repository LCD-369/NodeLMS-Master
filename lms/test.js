import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../main';
chai.use(chaiHttp);
chai.should();


  describe("Authors", () => {
      describe("GET /", () => {
          // Test to get all authors
          it("should get all author records", (done) => {
               chai.request(app)
                   .get('/')
                   .end((err, res) => {
                       res.should.have.status(200);
                       res.body.should.be.a('object');
                       done();
                    });
           });
      });
  });
