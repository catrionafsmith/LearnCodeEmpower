$("#terminal").terminal(async function (command, terminal) {
    try {
        const prompt = `you are a helpful, knowledge sharing careers chatbot. I say: ${command}. You reply:`
        const keyresp = await fetch('/.netlify/functions/get-token')
        .then(response => response.json()
        )
        //  console.log(keyresp['message']);

        const response = await fetch(
            `https://api.openai.com/v1/completions`,
            {
                body: JSON.stringify({"model": "text-davinci-003", "prompt": prompt, "temperature": 0.86, "max_tokens": 256}),
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization:`Bearer ` + keyresp['message'],
                },
                    }
        ).then((response) => {
            if (response.ok) {
                response.json().then((json) => {
                    terminal.echo(json.choices[0].text.trim(), {keepWords: true});
                });
            }
        });
      
        console.log("Completed!");
    } catch (err) { console.error(`Error: ${err}`) }
},
    {
        greetings: 'Careers Chatbot v1:',
        name: 'gpt3_demo',
        height: 400,
        prompt: '> ',
    });