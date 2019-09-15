import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../main';
chai.use(chaiHttp);
chai.should();


  describe("Authors", () => {
      describe("GET /author", () => {
          // Test to get all authors
          it("should get all author records", (done) => {
               chai.request(app)
                   .get('/api/author')
                   .end((err, res) => {
                       res.should.have.status(200);
                       console.log("Got", result.body.data.length, "docs")
                       //res.body.should.be.a('object');
                       done();
                    });
           });
      });
  });
