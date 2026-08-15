import { brand } from "./Brand.js";
import { button } from "./Button.js";
import { nav } from "../data/content.js";
export const navbar = () => `<header class="navbar">${brand()}<nav data-nav>${nav.map(([href,label])=>`<a href="${href}" data-nav-link>${label}</a>`).join("")}</nav><div class="nav-actions">${button("Beta-Zugang","#beta",true,"beta")}<button class="menu" data-menu aria-label="Menü"><i></i><i></i><i></i></button></div></header>`;