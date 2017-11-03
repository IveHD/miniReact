var data = require('./data.json');
function mockApi(app, express){
    var apiRoutes = express.Router();
    apiRoutes.get('/resource/subjects', function(req, res) {
        res.json(data['subject-list'])
    });

    apiRoutes.get('/resource/questionSources', function(req, res) {
        res.json(data['question-source'])
    });
    apiRoutes.get('/resource/questionChildTypes', function(req, res) {
        res.json(data['questionType-list'])
    });
    apiRoutes.get('/resource/subjects', function(req, res) {
        res.json(data['subject-list'])
    });
    apiRoutes.get('/questionMaker/search', function(req, res) {
        res.json(data['creator-list'])
    });
    apiRoutes.get('/knowledgepoint/level/list', function(req, res) {
        res.json(data['knowledgepoint-list'])
    });
    apiRoutes.get('/question/detail', function(req, res) {
        res.json(data['question-detail']);
    });
    apiRoutes.post('/questionMaker/frozen', function(req, res) {
        res.json(data['frozen-list'])
    });
    apiRoutes.post('/questionMaker/add', function(req, res) {
        res.json(data['frozen-list'])
    });
    apiRoutes.get('/knowledgepoint/level/list', function(req, res) {
        res.json(data['statistics-list'])
    });
    apiRoutes.get('/knowledgepoint/search', function(req, res) {
        res.json(data['knowledgepoint-lists'])
    });
    apiRoutes.post('/questionMaker/create', function(req, res) {
        res.json(data['creator-list1'])
    });
    apiRoutes.post('/questionMaker/modify', function(req, res) {
        res.json(data['creator-list1'])
    });
    apiRoutes.get('/knowledgepoint/remove', function(req, res) {
        res.json(data['delete-list1'])
    });
    apiRoutes.get('/knowledgepoint/create', function(req, res) {
        res.json(data['knowledgepoint-lists'])
    });
    apiRoutes.get('/resource/employees', function(req, res) {
        res.json(data['employee-list'])
    });
    apiRoutes.get('/resource/grades', function(req, res) {
        res.json(data['grades-list'])
    });
    apiRoutes.get('/resource/questionMakers', function(req, res) {
        res.json(data['questionMakers-list'])
    });
    apiRoutes.post('/aliyun/oss/preUploadV2', function(req, res) {
        res.json(data['aliyun-on-upload'])
    });
    apiRoutes.post('/paper/search', function(req, res) {
        res.json(data['paper-list'])
    });
    apiRoutes.post('/paper/create', function(req, res) {
        res.json(data['response'])
    });
    apiRoutes.get('/paper/info', function(req, res) {
        res.json(data['paper-info'])
    });
    apiRoutes.get('/paper/subject/byPaperTypeId', function(req, res) {
        res.json(data['bySubject-list'])
    });
    apiRoutes.get('/resource/questionFilters', function(req, res) {
        res.json(data['resource-data'])
    });
    apiRoutes.post('/question/search', function(req, res) {
        res.json(data['question-list22'])
    });
    apiRoutes.get('/resource/paperTypes', function(req, res) {
        res.json(data['paperType-list22'])
    });
    apiRoutes.get('/console/common/provinces', function(req, res) {
        res.json(data['common-provinces'])
    });
    apiRoutes.get('/console/common/cities', function(req, res) {
        res.json(data['common-cities'])
    });
    apiRoutes.get('/console/common/schools/?', function(req, res) {
        res.json(data['common-schools'])
    });
    apiRoutes.post('/review/error/search', function(req, res) {
        res.json(data['error-list'])
    });
    apiRoutes.get('/review/error/detail', function(req, res) {
        res.json(data['error-detail'])
    });

    
    app.use('/', apiRoutes);

    apiRoutes.post('/console/supplier/list', function(req, res) {
        res.json(data['supplier-list'])
    });
    apiRoutes.post('/console/product/list', function(req, res) {
        res.json(data['product-list'])
    });

    apiRoutes.get('/resource/common', function(req, res) {
        res.json(data['resource-common'])
    });

    apiRoutes.get('/resource/supplier', function(req, res) {
        res.json(data['resource-supplier'])
    });
    apiRoutes.get('/resource/topic', function(req, res) {
        res.json(data['resource-topic'])
    });
    apiRoutes.get('/resource/article', function(req, res) {
        res.json(data['resource-article'])
    });
    apiRoutes.get('/resource/product', function(req, res) {
        res.json(data['resource-product'])
    });
    apiRoutes.get('/resource/course', function(req, res) {
        res.json(data['resource-course'])
    });
    apiRoutes.post('/console/coupon/list', function(req, res) {
        res.json(data['coupon-list'])
    });
    apiRoutes.get('/console/coupon/detail', function(req, res) {
        res.json(data['coupon-detail'])
    });
    apiRoutes.post('/console/banner/group/list', function(req, res) {
        res.json(data['bannerGroup-list'])
    });
    apiRoutes.post('/console/banner/list', function(req, res) {
        res.json(data['banner-list'])
    });
    
    app.use('/', apiRoutes);
}
module.exports = mockApi;

