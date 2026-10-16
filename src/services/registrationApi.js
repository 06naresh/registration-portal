const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://jsonplaceholder.typicode.com";

export async function registerUser(values) {
    const response = await fetch(`${API_BASE_URL}/users`, {
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: values.fullName.trim(),
            email: values.email.trim(),
            phone: values.phone.trim(),
            course: values.course,
        }),
    });

    if(!response.ok){
        throw new Error("We couldn't submit your registration. Please try again.");
    }

    return response.json();
}