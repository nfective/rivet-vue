const common_props = {
    id: String,
    class: String
}

const anchor_props = {
    text: String,
    uri: String,
    current: String,
    disabled: Boolean
}

const button_props = {
    text: String,
    type: String,
    checked: String,
    disabled: Boolean  
}

const alert_props = {
    variant: String,
    message: String
}

const dropdown_props = {
    label: String,
    open: Boolean
}

const http_props = {
    method: String,
    uri: String,
    params: Object,
    timeout: Number,
    cors: Boolean,
    request_type: String,
    response_type: String
}

const delay_props = {
    type: String,
    immediate: Boolean,
    wait_time: Number
}

const auth_props = {
    auth_type: String,
    token: String
}

// Props that are shared by all components of a similar type
export {
    common_props,
    anchor_props,
    button_props,
    alert_props,
    dropdown_props,
    http_props,
    delay_props,
    auth_props
}