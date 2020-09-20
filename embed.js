'use strict';

$(document).ready(function () {

  var converter = new showdown.Converter();


  var fields = 1;

  var source = '';

  var embed = {

    title: '',

    author: {

      name: '',

      url: '',

      icon: ''

    },

    description: '',

    url: '',

    thumb_url: '',

    color: '',

    fields: [{}],

    footer: ''

  };


    if (embed.fields.length > 0) {

      $('.embed-inner').append('<div class="fields"></div>');

    }

    for (var _iterator = embed.fields, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {

      var _ref;

      if (_isArray) {

        if (_i >= _iterator.length) break;

        _ref = _iterator[_i++];

      } else {

        _i = _iterator.next();

        if (_i.done) break;

        _ref = _i.value;

      }

      var field = _ref;

      $('.embed-inner .fields').append('\n        <div class="field ' + (field.inline && 'inline') + '">\n          <div class="field-name">' + field.name + '</div>\n          <div class="field-value">' + converter.makeHtml(field.value) + '</div>\n        </div>\n      ');

      // add field


  // run once on startup
}

  function generateInputFields(fields) {

    // generate inputs for fields

    $('.input-fields').html('');

    var _loop = function _loop(i) {

      $('.input-fields').append('<div class="form-group row">\n        <div class="col-sm-4">\n          <input class="form-control" id="field-' + i + '-name" type="text" placeholder="name" value="' + (embed.fields[i].name !== undefined ? embed.fields[i].name : '') + '" />\n        </div>\n        <div class="col-sm-4">\n          <input class="form-control" id="field-' + i + '-value" type="text" placeholder="value" value="' + (embed.fields[i].value !== undefined ? embed.fields[i].value : '') + '" />\n        </div>\n        <div class="col-sm-2">\n          <div class="form-check">\n            <label class="form-check-label">\n              <input class="form-check-input" id="field-' + i + '-inline" type="checkbox" ' + (embed.fields[i].inline !== undefined ? 'checked="checked"' : '') + '> Inline\n            </label>\n          </div>\n        </div>\n        <div class="col-sm-2">\n          <button id="field-' + i + '-delete" class="btn btn-danger">Delete</button>\n        </div>\n      </div>');

      $('#field-' + i + '-name').keyup(function () {

        updateFieldName(i, $('#field-' + i + '-name').val());

      });

      $('#field-' + i + '-value').keyup(function () {

        updateFieldValue(i, $('#field-' + i + '-value').val());

      });

      $('#field-' + i + '-inline').click(function () {

        updateFieldInline(i, $('#field-' + i + '-inline').is(':checked'));

      });

      $('#field-' + i + '-delete').click(function (e) {

        e.preventDefault();

        deleteField(i);

      });

    };

    for (var i = 0; i < fields; i++) {

      _loop(i);

    }

    $('.input-fields').append('<button id="add-field" class="btn btn-success">Add field</button>');

    $('#add-field').click(function (e) {

      e.preventDefault();

      addField();

    });

  }

  generateInputFields(fields);

  function updateFieldName(index, value) {

    embed.fields[index].name = value;

    

  }

  function updateFieldValue(index, value) {

    embed.fields[index].value = value;

  

  }

  function updateFieldInline(index, value) {

    embed.fields[index].inline = value;

   

  }

  function deleteField(index) {

    embed.fields.splice(index, 1);

   

    fields -= 1;

    generateInputFields(fields);

  }

  function addField() {

    embed.fields.push({ inline: true });

    fields += 1;

    generateInputFields(fields);

  }


  // checking helpers

  function addWarning(item, type, message) {

    item.addClass('form-control-warning');

    item.removeClass('form-control-success');

    item.parent().addClass('has-warning');

    item.parent().removeClass('has-success');

    if ($('#' + type + '-feedback').length === 0) {

      item.after('<div class="form-control-feedback" id="' + type + '-feedback">' + message + '</div>');

    }

  }

  function addSuccess(item, type) {

    item.removeClass('form-control-warning');

    item.addClass('form-control-success');

    item.parent().addClass('has-success');

    item.parent().removeClass('has-warning');

    $('#' + type + '-feedback').remove();

  }


});
