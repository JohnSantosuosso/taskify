import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import "channels"
import "stylesheets/application"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

const application = Application.start()
const context = require.context("../controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

