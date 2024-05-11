import { addPost,deletePost } from "@/lib/actions"



const ServerActionTestPage = () => {

    const actionincomponent = async ()=> {
        "use server";

    }

    return (
        <div>
            <form action={addPost}>
                <input type="text" placeholder="title" name="title" />
                <input type="text" placeholder="desc" name="desc" />
                <input type="text" placeholder="slug" name="slug" />
                <input type="text" placeholder="userId" name="userId" />
                <button>Create Post</button>
            
            </form>

            <form action={deletePost}>
                <input type="text" placeholder="postId" name="Id" />
                <button>Delete Post</button>
            
            </form>
            </div>
    )
}
export default ServerActionTestPage
