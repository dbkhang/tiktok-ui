import { HeaderOnly } from "~/layouts";
import MessageLayout from "~/layouts/MessageLayout";

function Message() {
    return (
        <div>
            <HeaderOnly>
                <MessageLayout/>
            </HeaderOnly>
        </div>
    );
}

export default Message;
