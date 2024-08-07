function inputsNameAndJob(): string {
  return '<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" value="rob"/><label for="job">Job</label><textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea></form>';
}

function twoInputsWhereOneWithClass(): string {
  return '<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" value="rob" class="user-input"/><label for="job">Job</label><input type="text" name="job" value="hexlet"/></form>';
}

function inputAsTextarea(): string {
  return '<form action="#" method="post"><label for="job">Job</label><textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea></form>';
}

function textareaRewriteDefaults(): string {
  return '<form action="#" method="post"><label for="job">Job</label><textarea cols="50" rows="50" name="job" as="textarea">hexlet</textarea></form>';
}

function formWithLabelsAndCustomTextSubmit(): string {
  return '<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" value="rob"/><label for="job">Job</label><textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea><input type="submit" value="Wow"/></form>';
}

function formWithLabelsAndDefaultTextSubmit(): string {
  return '<form action="#" method="post"><label for="name">Name</label><input type="text" name="name" value="rob"/><label for="job">Job</label><textarea cols="20" rows="40" name="job" as="textarea">hexlet</textarea><input type="submit" value="Save"/></form>';
}

export {
  inputsNameAndJob,
  twoInputsWhereOneWithClass,
  inputAsTextarea,
  textareaRewriteDefaults,
  formWithLabelsAndCustomTextSubmit,
  formWithLabelsAndDefaultTextSubmit,
};
