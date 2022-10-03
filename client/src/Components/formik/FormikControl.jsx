import DropdownInput from "../inputs/DropdownInput";
import MainInput from "../inputs/MainInput";
import TextareaInput from "../inputs/TextareaInput";
import ImageInput from "../inputs/ImageInput";
import VideoInput from "../inputs/VideoInput";

const FormikControl = ({ control, ...rest }) => {
    switch (control) {
        case "input":
            return <MainInput {...rest} />;
        case "others":
            return <MainInput width="40%" {...rest} />;
        case "textarea":
            return <TextareaInput {...rest} />;
        case "textarea2":
            return <TextareaInput width="40%" margin="0em 0em 1.5em 0em" {...rest} />;
        case "select":
            return <DropdownInput {...rest} />;
        case "halfSelect":
            return <DropdownInput width="40%" margin="0em 0em 1.5em 0em" {...rest} />;
        case "image":
            return <ImageInput margin="0em 0em 1.5em 0em" {...rest} />;
        case "video":
            return <VideoInput margin="0em 0em 1.5em 0em" {...rest} />;
        case "price":
            return <VideoInput margin="0em 0em 1.5em 0em" {...rest} />;
        default:
            return null;
    }
}

export default FormikControl;