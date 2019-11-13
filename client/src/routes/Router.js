import VueRouter from "vue-router";
import HeaderBoard from '../components/Header/HeaderBoard.vue';
import HeaderList from '../components/Header/HeaderList.vue';
import Board from "../components/Board";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/", components: {
                header: HeaderBoard,
                default: Board
            }
        },
        {
            path: "/list",
            name: "listHome",
            components: {
                header: { template: "<router-view><h1>List Home</h1></router-view>" }
            },
            children: [
                {
                    path: ":listid", components: {
                        header: HeaderList
                    }
                }
            ]
        },
    ]
});

export default router;
