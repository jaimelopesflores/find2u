'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = exports.Disappeared = undefined;

var _model = require('./model');

Object.defineProperty(exports, 'schema', {
  enumerable: true,
  get: function get() {
    return _model.schema;
  }
});

var _express = require('express');

var _querymen = require('querymen');

var _bodymen = require('bodymen');

var _passport = require('../../services/passport');

var _controller = require('./controller');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Disappeared = _model2.default;


var router = new _express.Router();
var _schema$tree = _model.schema.tree,
    name = _schema$tree.name,
    bornAt = _schema$tree.bornAt,
    obs = _schema$tree.obs,
    policeDocument = _schema$tree.policeDocument,
    status = _schema$tree.status;

/**
 * @api {post} /disappeareds Create disappeared
 * @apiName CreateDisappeared
 * @apiGroup Disappeared
 * @apiPermission user
 * @apiParam {String} token user access token.
 * @apiParam name Disappeared's name.
 * @apiParam bornAt Disappeared's bornAt.
 * @apiParam obs Disappeared's obs.
 * @apiParam status Disappeared's status.
 * @apiSuccess {Object} disappeared Disappeared's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Disappeared not found.
 * @apiError 401 user access only.
 */

router.post('/', (0, _passport.token)({ required: true }), (0, _bodymen.middleware)({ name: name, bornAt: bornAt, obs: obs, policeDocument: policeDocument, status: status }), _controller.create);

/**
 * @api {get} /disappeareds Retrieve disappeareds
 * @apiName RetrieveDisappeareds
 * @apiGroup Disappeared
 * @apiUse listParams
 * @apiSuccess {Object[]} disappeareds List of disappeareds.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', (0, _querymen.middleware)(), _controller.index);

/**
 * @api {get} /disappeareds/:id Retrieve disappeared
 * @apiName RetrieveDisappeared
 * @apiGroup Disappeared
 * @apiSuccess {Object} disappeared Disappeared's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Disappeared not found.
 */
router.get('/:id', _controller.show);

/**
 * @api {put} /disappeareds/:id Update disappeared
 * @apiName UpdateDisappeared
 * @apiGroup Disappeared
 * @apiPermission user
 * @apiParam {String} token user access token.
 * @apiParam name Disappeared's name.
 * @apiParam bornAt Disappeared's bornAt.
 * @apiParam obs Disappeared's obs.
 * @apiParam status Disappeared's status.
 * @apiSuccess {Object} disappeared Disappeared's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Disappeared not found.
 * @apiError 401 user access only.
 */
router.put('/:id', (0, _passport.token)({ required: true }), (0, _bodymen.middleware)({ name: name, bornAt: bornAt, obs: obs, policeDocument: policeDocument, status: status }), _controller.update);

/**
 * @api {delete} /disappeareds/:id Delete disappeared
 * @apiName DeleteDisappeared
 * @apiGroup Disappeared
 * @apiPermission user
 * @apiParam {String} token user access token.
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Disappeared not found.
 * @apiError 401 user access only.
 */
router.delete('/:id', (0, _passport.token)({ required: true }), _controller.destroy);

exports.default = router;
//# sourceMappingURL=index.js.map