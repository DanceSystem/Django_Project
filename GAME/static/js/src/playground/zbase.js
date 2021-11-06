class AcGamePlayground {
    constructor(root) {
        this.root = root;
        this.$playground = $(`<div>游戏界面</div>`);

        this.root.$ac_game.append(this.$playground); //加入到游戏界面里

        this.start();

    }

    start(){
    }

    show() {    //打开playground界面
        this.$playground.show();
    }

    hide() {    //关闭playground界面
        this.$playground.hide();
    }
}
