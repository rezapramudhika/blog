const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should()
chai.use(chaiHttp);

const expect = chai.expect;
const app = 'http://localhost:3000';

describe('API /articles', () => {
    let id = null;
    const article = {
        title: 'Article Title test',
        body: 'Article body test'
    };

    describe('POST /articles', () => {
        it('Success create an article', done => {
            chai.request(app)
                .post('/articles')
                .type('form')
                .send(article)
                .end((err, res) => {
                    id = res.body.data._id;

                    should.equal(err, null);
                    res.should.have.status(201);
                    (res.body).should.haveOwnProperty('message');
                    (res.body.message).should.be.a('string').equal('Create article success');
                    (res.body).should.haveOwnProperty('data');
                    (res.body.data).should.be.an('object').contain({
                        _id: id,
                        title: article.title,
                        body: article.body
                    });
                    done();
                });
        });
    });

    describe('GET /articles', () => {
        it('Success get all article', done => {
            chai.request(app)
                .get('/articles')
                .end((err, res) => {
                    should.equal(err, null);
                    res.should.have.status(200);
                    (res.body).should.haveOwnProperty('message');
                    (res.body.message).should.be.a('string').equal('Success get all data');
                    (res.body).should.haveOwnProperty('data');
                    (res.body.data).should.be.an('array');
                    done();
                });
        });
    });

    describe('PUT /articles/:id', () => {
        it('Success update an article', done => {
            const updateArticle = {
                title: 'Article Title test (update)',
                body: 'Article body test (update)'
            };
            chai.request(app)
                .put(`/articles/${id}`)
                .type('form')
                .send({
                    title: 'Article Title test (update)',
                    body: 'Article body test (update)'
                })
                .end((err, res) => {

                    should.equal(err, null);
                    res.should.have.status(200);
                    (res.body).should.haveOwnProperty('message');
                    (res.body.message).should.be.a('string').equal('Update article success');
                    (res.body).should.haveOwnProperty('data');
                    (res.body.data).should.be.an('object').contain({
                        _id: id,
                        title: updateArticle.title,
                        body: updateArticle.body
                    });
                    done();
                });
        });
    });

    describe('DELETE /articles/:id', () => {
        it('Success delete an article', done => {
            chai.request(app)
                .delete(`/articles/${ id }`)
                .end((err, res) => {
                    should.equal(err, null);
                    res.should.have.status(200);
                    (res.body).should.haveOwnProperty('message');
                    (res.body.message).should.be.a('string').equal('Delete article success');
                    done();
                });
        });
    });
});