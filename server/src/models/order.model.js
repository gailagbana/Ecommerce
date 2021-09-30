const { model, Schema } = require('mongoose');

const OrderSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    user: {
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        postal: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
    },
    orderedInventory: {
        type: Array,
        required: true,
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false,
    },
    isShipped: {
        type: Boolean,
        required: true,
        default: false,
    },
    isComplete: {
        type: Boolean,
        required: true,
        default: false,
    },
    isDeleted: {
        type: Boolean,
        required: true,
        default: false,
    },
    timeStamp: {
        type: Number,
        required: true,
        default: () => Date.now(),
    },
    createdOn: {
        type: Date,
        required: true,
        default: () => new Date(),
    },
    updatedOn: {
        type: Date,
        required: true,
        default: () => new Date(),
    },
});

model('Order', OrderSchema);
