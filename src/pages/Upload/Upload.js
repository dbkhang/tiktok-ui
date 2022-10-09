import { HeaderOnly } from "~/layouts";
import UploadLayout from "~/layouts/UploadLayout";

function Upload () {
    return (
        <div>
            <HeaderOnly>
                <UploadLayout/>
            </HeaderOnly>
        </div>
    );
}

export default Upload;