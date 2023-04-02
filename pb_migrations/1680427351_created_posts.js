migrate(
    (db) => {
        const collection = new Collection({
            id: 'gehgaqxwu50fvf6',
            created: '2023-04-02 09:22:31.725Z',
            updated: '2023-04-02 09:22:31.725Z',
            name: 'posts',
            type: 'base',
            system: false,
            schema: [
                {
                    system: false,
                    id: 'al4sjrya',
                    name: 'title',
                    type: 'text',
                    required: false,
                    unique: false,
                    options: {
                        min: null,
                        max: null,
                        pattern: '',
                    },
                },
                {
                    system: false,
                    id: 'gxjdjh4r',
                    name: 'content',
                    type: 'text',
                    required: false,
                    unique: false,
                    options: {
                        min: null,
                        max: null,
                        pattern: '',
                    },
                },
            ],
            indexes: [],
            listRule: '',
            viewRule: '',
            createRule: '',
            updateRule: '',
            deleteRule: '',
            options: {},
        })

        return Dao(db).saveCollection(collection)
    },
    (db) => {
        const dao = new Dao(db)
        const collection = dao.findCollectionByNameOrId('gehgaqxwu50fvf6')

        return dao.deleteCollection(collection)
    }
)
