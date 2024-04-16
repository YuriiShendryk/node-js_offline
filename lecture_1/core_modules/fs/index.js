const fs = require('fs/promises');

(async () => { 
    try {
        const data = await fs.readFile('./data.txt', 'utf8');       
        console.log(data);
        const newData = 'code';
        await fs.appendFile('./data.txt', newData, 'utf8');
        const dir = await fs.readdir('./');        
        console.log(dir);
        fs.unlink('./data1.txt')
    } catch (error) {
        console.log({ error });
    }
}
)();





