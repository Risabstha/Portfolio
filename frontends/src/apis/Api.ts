const baseUrl = import.meta.env.VITE_BACKEND_BASE_URL;

interface maildata {
    username: string;
    email: string;
    subject: string;
    message: string;
  }

const mailApi =  async (mailData: maildata ) => {
    const response = await fetch(`${baseUrl}/mail/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mailData),
    });
    return response.json();
  };
  
export default mailApi;
