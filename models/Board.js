const keystone = require('keystone');
var Types = keystone.Field.Types;

var Board = new keystone.List('Board', {
    map: { name: 'title'},
    autokey: { path: 'slug', from: 'title', unique: true }
});

Board.add({
    title: {
        type: String,
        required: true
    },
    state: {
        type: Types.Select,
        options: 'draft, published, archived',
        default: 'draft',
        index: true
    },
    author: {
        type: Types.Relationship,
        ref: 'User',
        index: true
    },
    publishedDate: {
        type: Types.Date,
        index: true,
        dependsOn: {
            state: 'published'
        }
    },
    url: {
        type: String
    },
    order: {
        type: Types.Number,
        default: 9999
    },
    image: { type: Types.CloudinaryImage },
    description: {
        type: Types.Html,
        wysiwyg: true,
        height: 200
    }
});

Board.defualtColumns = 'title, state|20%, author|20%, publishedDate|20%';
Board.register();
