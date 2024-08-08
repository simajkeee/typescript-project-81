/* eslint-disable max-len */
function inputsNameAndJob() {
  return '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><textarea cols="20" rows="40" name="job">hexlet</textarea></form>';
}
function twoInputsWhereOneWithClass() {
  return '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob" class="user-input"><label for="job">Job</label><input name="job" type="text" value="hexlet"></form>';
}
function inputAsTextarea() {
  return '<form method="post" action="#"><label for="job">Job</label><textarea cols="20" rows="40" name="job">hexlet</textarea></form>';
}
function textareaRewriteDefaults() {
  return '<form method="post" action="#"><label for="job">Job</label><textarea cols="50" rows="50" name="job">hexlet</textarea></form>';
}
function formWithLabelsAndCustomTextSubmit() {
  return '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><textarea cols="20" rows="40" name="job">hexlet</textarea><input type="submit" value="Wow"></form>';
}
function formWithLabelsAndDefaultTextSubmit() {
  return '<form method="post" action="#"><label for="name">Name</label><input name="name" type="text" value="rob"><label for="job">Job</label><textarea cols="20" rows="40" name="job">hexlet</textarea><input type="submit" value="Save"></form>';
}
export {
  inputsNameAndJob, twoInputsWhereOneWithClass, inputAsTextarea, textareaRewriteDefaults, formWithLabelsAndCustomTextSubmit, formWithLabelsAndDefaultTextSubmit,
};
