import { createRouter, createWebHistory } from 'vue-router';
import signIn from './components/signIn.vue';
import bookClasses from './components/bookClasses.vue';
import SignUp from './components/SignUp.vue';
import searchBooks from './components/searchBooks.vue';
import showBooks from './components/showBooks.vue';
import updateBo from './components/updateBook.vue';


const routes = [
    {
        name: "signIn",
        component: signIn,
        path: "/signIn",
      },
      {
                name: "update",
                component: updateBo,
                path: "/update",
       },
      {
        name: "signUp",
        component: SignUp,
        path: "/",
      },
    {
        name: "searchBook",
        component: searchBooks,
        path: '/searchBook'
    },
    {
        name: "bookClass",
        component: bookClasses,
        path: '/bookClasses'
    },
    {
        name: "showBooks",
        component: showBooks,
        path: '/showBooks'
    },
];
const router = createRouter({
    history: createWebHistory(),
     routes,
})
export default router;

