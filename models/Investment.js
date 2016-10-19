const keystone = require('keystone');
var Types = keystone.Field.Types;

var Investment = new keystone.List('Investment', {
    map: { name: 'title'},
    autokey: { path: 'slug', from: 'title', unique: true }
});

Investment.add({
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
    image: { type: Types.CloudinaryImage },
    order: {
        type: Types.Number
    },
    description: {
        type: Types.Html,
        wysiwyg: true,
        height: 200
    }
});

Investment.defualtColumns = 'title, state|20%, author|20%, publishedDate|20%';
Investment.register();
