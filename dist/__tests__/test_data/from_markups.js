"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inputsNameAndJob = inputsNameAndJob;
exports.twoInputsWhereOneWithClass = twoInputsWhereOneWithClass;
exports.inputAsTextarea = inputAsTextarea;
exports.textareaRewriteDefaults = textareaRewriteDefaults;
exports.formWithLabelsAndCustomTextSubmit = formWithLabelsAndCustomTextSubmit;
exports.formWithLabelsAndDefaultTextSubmit = formWithLabelsAndDefaultTextSubmit;
function inputsNameAndJob() {
    return '<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" value="rob"/><label for="job">Job</label><textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea></form>';
}
function twoInputsWhereOneWithClass() {
    return '<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" value="rob" class="user-input"/><label for="job">Job</label><input type="text" name="job" value="hexlet"/></form>';
}
function inputAsTextarea() {
    return '<form action="#" method="post"><label for="job">Job</label><textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea></form>';
}
function textareaRewriteDefaults() {
    return '<form action="#" method="post"><label for="job">Job</label><textarea cols="50" rows="50" name="job" as="textarea">hexlet</textarea></form>';
}
function formWithLabelsAndCustomTextSubmit() {
    return '<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" value="rob"/><label for="job">Job</label><textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea><input type="submit" value="Wow"/></form>';
}
function formWithLabelsAndDefaultTextSubmit() {
    return '<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" value="rob"/><label for="job">Job</label><textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea><input type="submit" value="Save"/></form>';
}
//# sourceMappingURL=from_markups.js.map