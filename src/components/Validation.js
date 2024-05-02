export default function Validation (values) {
    const errors = {}

    const email_pattern = /^[\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(values.name=="") {
        errors.name = "Name is Required!";
    }
      if(values.name=="") {
        errors.name = "Email is Required!";
    } else if(!email_pattern.test(values.email)) {
        errors.email = "Email is not correct";
    }
    return errors;
}