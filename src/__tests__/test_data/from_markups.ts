function inputsNameAndJob(): string {
  return "<form action=\"#\" method=\"post\">" +
    "<input type=\"text\" name=\"name\" value=\"rob\"/>" +
    "<textarea cols=\"20\" rows=\"40\" name=\"job\" as=\"textarea\">hexlet</textarea>" +
    "</form>";
}

function twoInputsWhereOneWithClass(): string {
  return "<form action=\"#\" method=\"post\">" +
    "<input type=\"text\" name=\"name\" value=\"rob\" class=\"user-input\"/>" +
    "<input type=\"text\" name=\"job\" value=\"hexlet\"/>" +
    "</form>";
}

function inputAsTextarea(): string {
  return "<form action=\"#\" method=\"post\">" +
    "<textarea cols=\"20\" rows=\"40\" name=\"job\" as=\"textarea\">hexlet</textarea>" +
    "</form>";
}

function textareaRewriteDefaults(): string {
  return "<form action=\"#\" method=\"post\">" +
    "<textarea cols=\"50\" rows=\"50\" name=\"job\" as=\"textarea\">hexlet</textarea>" +
    "</form>";
}

export {
  inputsNameAndJob,
  twoInputsWhereOneWithClass,
  inputAsTextarea,
  textareaRewriteDefaults
};
