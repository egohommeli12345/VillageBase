import { PostInterface } from "./PostInterface.ts";

export const AddPost = async (postObject: PostInterface) => {
    const response = await fetch("http://localhost:8080/api/post/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postObject),
    });
    if (response.ok) {
        alert("Posti lisätty");
    } else {
        alert("Postia lisättäessä virhe");
    }
};
