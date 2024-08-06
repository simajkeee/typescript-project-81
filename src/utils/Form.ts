interface FormFields {
  [key: string]: string;
}

interface FormProps {
  [key: string]: string;
}

export default class Form {
  static formFor(fields: FormFields, props: FormProps, fn: Function): string {
    if (props.action === undefined) {
      props.action = '#'
    }

    if (props.method === undefined) {
      props.method = 'post';
    }

    let form = `<form${Form.getFormAttributesString(props)}></form>`

    return form;
  }

  private static getFormAttributesString(props: FormProps): string {
    let propsStr = '';
    Object.entries(props).map(([attr, val]) => {
      propsStr += ` ${attr}="${val}"`;
    });

    return propsStr;
  }
}
