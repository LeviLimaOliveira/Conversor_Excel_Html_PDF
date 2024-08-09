class Processor {
    static Process(data) {
        const rows = data.split("\r\n").filter(line => line.length > 0);
        return rows.map(row => row.split(","));
    }
}

module.exports = Processor;