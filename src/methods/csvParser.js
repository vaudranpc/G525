import Papa from 'papaparse';

const CSV_DATA_FILES = ["compteurs", "fontaines"];
export const getDataCompteur = async () => {

    const resulat = Promise.all(
        CSV_DATA_FILES.map(
            (fichier) => new Promise((resolve, reject) => {
                var fichierCsv = require(`../data/${fichier}.csv`);
                Papa.parse(fichierCsv, {
                    header: false,
                    comments: true,
                    download: true,
                    complete: resolve,
                    error: reject

                });
            })
        )
    ).then((resulat) => {
        const result = {};
        CSV_DATA_FILES.forEach(
            (fichier, index) =>
                (result[fichier] = resulat[index].data.splice(1, resulat[index].data.length - 2))
        );
        return result;

    });
    return resulat;
}