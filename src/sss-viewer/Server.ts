import {Card} from "./Card";

export default interface Server {
    id: number
    type: ServerType
    level: number
    name: string
    access_code: string
    cards: Card[]
}

export type ServerType = "satellite" | "meteor"

export const servers: Server[] = [
    {
        "id": 1,
        "type": "meteor",
        "level": 1,
        "name": "オックス",
        "cards": [
            {
                "name": "オックスファイア",
                "class": "standard"
            },
            {
                "name": "ロングソード",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "アンガーファイア１",
                "class": "standard"
            },
            {
                "name": "オックスファイア",
                "class": "standard"
            },
            {
                "name": "ドリルアーム１",
                "class": "standard"
            },
            {
                "name": "エアスプレッド１",
                "class": "standard"
            },
            {
                "name": "キャノン",
                "class": "standard"
            },
            {
                "name": "リカバリー５０",
                "class": "standard"
            },
            {
                "name": "ビーストスイング１",
                "class": "standard"
            },
            {
                "name": "ビーストスイング１",
                "class": "standard"
            },
            {
                "name": "アンガーファイア１",
                "class": "standard"
            },
            {
                "name": "クサムラステージ",
                "class": "standard"
            },
            {
                "name": "ミニグレネード",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー１",
                "class": "standard"
            },
            {
                "name": "ロングソード",
                "class": "standard"
            },
            {
                "name": "ギザホイール",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "エアスプレッド１",
                "class": "standard"
            },
            {
                "name": "リカバリー５０",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー１",
                "class": "standard"
            },
            {
                "name": "ミニグレネード",
                "class": "standard"
            },
            {
                "name": "キャノン",
                "class": "standard"
            },
            {
                "name": "ロングソード",
                "class": "standard"
            },
            {
                "name": "シンクロフック１",
                "class": "standard"
            },
            {
                "name": "ドリルアーム１",
                "class": "standard"
            },
            {
                "name": "アンガーファイア１",
                "class": "standard"
            },
            {
                "name": "クサムラステージ",
                "class": "standard"
            },
            {
                "name": "リカバリー５０",
                "class": "standard"
            },
            {
                "name": "ビーストスイング１",
                "class": "standard"
            },
            {
                "name": "オックスファイア",
                "class": "standard"
            },
            {
                "name": "ワイドソード",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ１",
                "class": "standard"
            },
            {
                "name": "オックスファイア",
                "class": "standard"
            }
        ],
        "access_code": "KCHAJD"
    },
    {
        "id": 2,
        "type": "meteor",
        "level": 2,
        "name": "キャンサー",
        "cards": [
            {
                "name": "バブルフック１",
                "class": "standard"
            },
            {
                "name": "リカバリー５０",
                "class": "standard"
            },
            {
                "name": "アイスステージ",
                "class": "standard"
            },
            {
                "name": "バブルフック１",
                "class": "standard"
            },
            {
                "name": "キャンサーバブル",
                "class": "standard"
            },
            {
                "name": "キャンサーバブル",
                "class": "standard"
            },
            {
                "name": "アイススピニング１",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "リカバリー５０",
                "class": "standard"
            },
            {
                "name": "ドリルアーム１",
                "class": "standard"
            },
            {
                "name": "リカバリー５０",
                "class": "standard"
            },
            {
                "name": "バブルフック１",
                "class": "standard"
            },
            {
                "name": "プラズマガン",
                "class": "standard"
            },
            {
                "name": "ビーストスイング１",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "プラズマガン",
                "class": "standard"
            },
            {
                "name": "アイスステージ",
                "class": "standard"
            },
            {
                "name": "アイススピニング１",
                "class": "standard"
            },
            {
                "name": "ロングソード",
                "class": "standard"
            },
            {
                "name": "エアスプレッド１",
                "class": "standard"
            },
            {
                "name": "キャノン",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ミニグレネード",
                "class": "standard"
            },
            {
                "name": "ドリルアーム１",
                "class": "standard"
            },
            {
                "name": "ビーストスイング１",
                "class": "standard"
            },
            {
                "name": "アイススピニング１",
                "class": "standard"
            },
            {
                "name": "バブルフック１",
                "class": "standard"
            },
            {
                "name": "エアスプレッド１",
                "class": "standard"
            },
            {
                "name": "キャンサーバブル",
                "class": "standard"
            },
            {
                "name": "キャンサーバブル",
                "class": "standard"
            },
            {
                "name": "ドリルアーム１",
                "class": "standard"
            },
            {
                "name": "アイスステージ",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "アイススピニング１",
                "class": "standard"
            }
        ],
        "access_code": "MGALET"
    },
    {
        "id": 3,
        "type": "meteor",
        "level": 3,
        "name": "ダイヤ",
        "cards": [
            {
                "name": "ダイヤアイスバーン",
                "class": "standard"
            },
            {
                "name": "シンクロフック１",
                "class": "standard"
            },
            {
                "name": "アイスステージ",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "ダイヤアイスバーン",
                "class": "standard"
            },
            {
                "name": "シャークカッター１",
                "class": "standard"
            },
            {
                "name": "リカバリー５０",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "キャノン",
                "class": "standard"
            },
            {
                "name": "シャークカッター１",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ１",
                "class": "standard"
            },
            {
                "name": "バブルフック１",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア１",
                "class": "standard"
            },
            {
                "name": "ジェットアタック１",
                "class": "standard"
            },
            {
                "name": "ジェットアタック１",
                "class": "standard"
            },
            {
                "name": "キャノン",
                "class": "standard"
            },
            {
                "name": "アイスステージ",
                "class": "standard"
            },
            {
                "name": "エアスプレッド１",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "バブルフック１",
                "class": "standard"
            },
            {
                "name": "ワイドソード",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ１",
                "class": "standard"
            },
            {
                "name": "シンクロフック１",
                "class": "standard"
            },
            {
                "name": "ダイヤアイスバーン",
                "class": "standard"
            },
            {
                "name": "エアスプレッド１",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "リカバリー５０",
                "class": "standard"
            },
            {
                "name": "バブルフック１",
                "class": "standard"
            },
            {
                "name": "シャークカッター１",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア１",
                "class": "standard"
            },
            {
                "name": "アイスステージ",
                "class": "standard"
            },
            {
                "name": "ワイドソード",
                "class": "standard"
            },
            {
                "name": "ダイヤアイスバーン",
                "class": "standard"
            }
        ],
        "access_code": "NBAFAM"
    },
    {
        "id": 4,
        "type": "meteor",
        "level": 4,
        "name": "オヒュカス",
        "cards": [
            {
                "name": "オヒュカスクイーン",
                "class": "standard"
            },
            {
                "name": "ミニグレネード",
                "class": "standard"
            },
            {
                "name": "プラズマガン",
                "class": "standard"
            },
            {
                "name": "マッドバルカン１",
                "class": "standard"
            },
            {
                "name": "オヒュカスクイーン",
                "class": "standard"
            },
            {
                "name": "シンクロフック１",
                "class": "standard"
            },
            {
                "name": "ギザホイール１",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ１",
                "class": "standard"
            },
            {
                "name": "シンクロフック１",
                "class": "standard"
            },
            {
                "name": "ギザホイール１",
                "class": "standard"
            },
            {
                "name": "ジェットアタック１",
                "class": "standard"
            },
            {
                "name": "マッドバルカン１",
                "class": "standard"
            },
            {
                "name": "エアスプラッド１",
                "class": "standard"
            },
            {
                "name": "エドギリブレード１",
                "class": "standard"
            },
            {
                "name": "エドギリブレード１",
                "class": "standard"
            },
            {
                "name": "エドギリブレード１",
                "class": "standard"
            },
            {
                "name": "エドギリブレード１",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "エドギリブレード１",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ１",
                "class": "standard"
            },
            {
                "name": "ギザホイール１",
                "class": "standard"
            },
            {
                "name": "エドギリブレード１",
                "class": "standard"
            },
            {
                "name": "エアスプラッド１",
                "class": "standard"
            },
            {
                "name": "ギザホイール１",
                "class": "standard"
            },
            {
                "name": "シンクロフック１",
                "class": "standard"
            },
            {
                "name": "シンクロフック１",
                "class": "standard"
            },
            {
                "name": "リカバリー８０",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ミニグレネード",
                "class": "standard"
            },
            {
                "name": "リカバリー８０",
                "class": "standard"
            },
            {
                "name": "オヒュカスクイーン",
                "class": "standard"
            },
            {
                "name": "マッドバルカン１",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ１",
                "class": "standard"
            },
            {
                "name": "オヒュカスクイーン",
                "class": "standard"
            }
        ],
        "access_code": "NONPIC"
    },
    {
        "id": 5,
        "type": "meteor",
        "level": 5,
        "name": "クラウン",
        "cards": [
            {
                "name": "クラウンサンダー",
                "class": "standard"
            },
            {
                "name": "キャノン",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ステスルレーザー１",
                "class": "standard"
            },
            {
                "name": "クラウンサンダー",
                "class": "standard"
            },
            {
                "name": "ジェットアタック１",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア１",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "リカバリー８０",
                "class": "standard"
            },
            {
                "name": "ビーストスイング１",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ１",
                "class": "standard"
            },
            {
                "name": "マッドバルカン１",
                "class": "standard"
            },
            {
                "name": "プラズマガン",
                "class": "standard"
            },
            {
                "name": "ドリルアーム１",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア１",
                "class": "standard"
            },
            {
                "name": "ドリルアーム１",
                "class": "standard"
            },
            {
                "name": "ワイドソード",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "キャノン",
                "class": "standard"
            },
            {
                "name": "ステスルレーザー１",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア１",
                "class": "standard"
            },
            {
                "name": "ビーストスイング１",
                "class": "standard"
            },
            {
                "name": "プラズマガン",
                "class": "standard"
            },
            {
                "name": "リカバリー８０",
                "class": "standard"
            },
            {
                "name": "ビーストスイング１",
                "class": "standard"
            },
            {
                "name": "ジェットアタック１",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ１",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "ワイドソード",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア１",
                "class": "standard"
            },
            {
                "name": "クラウンサンダー",
                "class": "standard"
            },
            {
                "name": "リカバリー８０",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ステスルレーザー１",
                "class": "standard"
            },
            {
                "name": "クラウンサンダー",
                "class": "standard"
            }
        ],
        "access_code": "PPFCLG"
    },
    {
        "id": 6,
        "type": "meteor",
        "level": 6,
        "name": "ブラキオ",
        "cards": [
            {
                "name": "ブラキオウェーブ",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "シンクロフック１",
                "class": "standard"
            },
            {
                "name": "ブラキオウェーブ",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "シャークカッター１",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "アイススピニング１",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ドリルアーム１",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ブラズマガン",
                "class": "standard"
            },
            {
                "name": "シャークカッター１",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "シンクロフック１",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "アイススピニング１",
                "class": "standard"
            },
            {
                "name": "シャークカッター１",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "アイススピニング１",
                "class": "standard"
            },
            {
                "name": "シンクロフック１",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "ブラズマガン",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ１",
                "class": "standard"
            },
            {
                "name": "ブラキオウェーブ",
                "class": "standard"
            },
            {
                "name": "ブラキオウェーブ",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            }
        ],
        "access_code": "ANIFAK"
    },
    {
        "id": 7,
        "type": "meteor",
        "level": 7,
        "name": "ゴート",
        "cards": [
            {
                "name": "クラブストロング",
                "class": "standard"
            },
            {
                "name": "ビーストスイング２",
                "class": "standard"
            },
            {
                "name": "ローリングナッツ１",
                "class": "standard"
            },
            {
                "name": "シュリシュリケン１",
                "class": "standard"
            },
            {
                "name": "クラブストロング",
                "class": "standard"
            },
            {
                "name": "リカバリー８０",
                "class": "standard"
            },
            {
                "name": "ドリルアーム１",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "リカバリー８０",
                "class": "standard"
            },
            {
                "name": "パウダーシュート１",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー１",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "エアスプレッド１",
                "class": "standard"
            },
            {
                "name": "シンクロフック１",
                "class": "standard"
            },
            {
                "name": "シュリシュリケン１",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ローリングナッツ１",
                "class": "standard"
            },
            {
                "name": "パウダーシュート１",
                "class": "standard"
            },
            {
                "name": "ビーストスイング２",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "ドリルアーム１",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー１",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ビーストスイング２",
                "class": "standard"
            },
            {
                "name": "シュリシュリケン１",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "シンクロフック１",
                "class": "standard"
            },
            {
                "name": "パウダーシュート１",
                "class": "standard"
            },
            {
                "name": "クラブストロング",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ローリングナッツ１",
                "class": "standard"
            },
            {
                "name": "エアスプレッド１",
                "class": "standard"
            },
            {
                "name": "クラブストロング",
                "class": "standard"
            }
        ],
        "access_code": "NNPNHF"
    },
    {
        "id": 8,
        "type": "meteor",
        "level": 8,
        "name": "キグナス",
        "cards": [
            {
                "name": "キグナスウィング",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック１",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ギザホイール２",
                "class": "standard"
            },
            {
                "name": "キグナスウィング",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "リカバリー８０",
                "class": "standard"
            },
            {
                "name": "マッドバルカン２",
                "class": "standard"
            },
            {
                "name": "タイフーンダンス",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ２",
                "class": "standard"
            },
            {
                "name": "ギザホイール１",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ２",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック１",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "ジェットアタック２",
                "class": "standard"
            },
            {
                "name": "マッドバルカン２",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ギザホイール２",
                "class": "standard"
            },
            {
                "name": "リカバリー８０",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ２",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ジェットアタック２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック１",
                "class": "standard"
            },
            {
                "name": "マッドバルカン２",
                "class": "standard"
            },
            {
                "name": "ギザホイール２",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック１",
                "class": "standard"
            },
            {
                "name": "キグナスウィング",
                "class": "standard"
            },
            {
                "name": "ギザホイール２",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ２",
                "class": "standard"
            },
            {
                "name": "キグナスウィング",
                "class": "standard"
            }
        ],
        "access_code": "TKNRQC"
    },
    {
        "id": 9,
        "type": "meteor",
        "level": 9,
        "name": "ハープ",
        "cards": [
            {
                "name": "スカルアロー３",
                "class": "standard"
            },
            {
                "name": "マッドバルカン２",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "サンダーオブアース１",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "ホイッスル",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "ディバイドライン",
                "class": "standard"
            },
            {
                "name": "マッドバルカン２",
                "class": "standard"
            },
            {
                "name": "マッドバルカン２",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "パニッククラウド",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "パニッククラウド",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "ホイッスル",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ２",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "マッドバルカン２",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー１",
                "class": "standard"
            },
            {
                "name": "サンダーオブアース１",
                "class": "standard"
            },
            {
                "name": "ディバイドライン",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "ホイッスル",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "ビーストスイング３",
                "class": "standard"
            }
        ],
        "access_code": "SIJHKR"
    },
    {
        "id": 10,
        "type": "meteor",
        "level": 10,
        "name": "クラブ",
        "cards": [
            {
                "name": "クラブストロング",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "ローリングナッツ２",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー１",
                "class": "standard"
            },
            {
                "name": "ストロングスイング",
                "class": "standard"
            },
            {
                "name": "カウントボム１",
                "class": "standard"
            },
            {
                "name": "パウダーシュート１",
                "class": "standard"
            },
            {
                "name": "シュリシュリケン１",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "パウダーシュート１",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "バルカンシード１",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "カウントボム１",
                "class": "standard"
            },
            {
                "name": "ウッド＋３０",
                "class": "standard"
            },
            {
                "name": "グリーングレネード",
                "class": "standard"
            },
            {
                "name": "コガラシ１",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー１",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "シュリシュリケン１",
                "class": "standard"
            },
            {
                "name": "バルカンシード１",
                "class": "standard"
            },
            {
                "name": "シュリシュリケン１",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "クサムラステージ",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "パウダーシュート１",
                "class": "standard"
            },
            {
                "name": "ストロングスイング",
                "class": "standard"
            },
            {
                "name": "パウダーシュート１",
                "class": "standard"
            },
            {
                "name": "ローリングナッツ２",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー１",
                "class": "standard"
            },
            {
                "name": "クラブストロング",
                "class": "standard"
            }
        ],
        "access_code": "TANKTH"
    },
    {
        "id": 11,
        "type": "meteor",
        "level": 11,
        "name": "アポロン",
        "cards": [
            {
                "name": "アポロンフレイム",
                "class": "standard"
            },
            {
                "name": "ファイア＋３０",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "アポロンフレイム",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "グリーングレネード",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム１",
                "class": "standard"
            },
            {
                "name": "ヒートグレネード",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "カウントボム２",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "アンガーファイア２",
                "class": "standard"
            },
            {
                "name": "アンガーファイア２",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "カウントボム２",
                "class": "standard"
            },
            {
                "name": "ヒートグレネード",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ローリングナッツ１",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー２",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム１",
                "class": "standard"
            },
            {
                "name": "アンガーファイア２",
                "class": "standard"
            },
            {
                "name": "アポロンフレイム",
                "class": "standard"
            },
            {
                "name": "カウントボム２",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ヒートグレネード",
                "class": "standard"
            },
            {
                "name": "アポロンフレイム",
                "class": "standard"
            }
        ],
        "access_code": "MOGNAN"
    },
    {
        "id": 12,
        "type": "meteor",
        "level": 12,
        "name": "ファントム",
        "cards": [
            {
                "name": "ファントムブラック",
                "class": "standard"
            },
            {
                "name": "マミーハンド２",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック２",
                "class": "standard"
            },
            {
                "name": "ファントムブラック",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "インビジブル",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "タイフーンダンス",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "マミーハンド２",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "マミーハンド２",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー１",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "マミーハンド２",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック２",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "タイフーンダンス",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー１",
                "class": "standard"
            },
            {
                "name": "インビジブル",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "ファントムブラック",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "タイフーンダンス",
                "class": "standard"
            },
            {
                "name": "マミーハンド２",
                "class": "standard"
            },
            {
                "name": "ファントムブラック",
                "class": "standard"
            }
        ],
        "access_code": "FKKILI"
    },
    {
        "id": 13,
        "type": "meteor",
        "level": 13,
        "name": "レオ",
        "cards": [
            {
                "name": "レオキングダムＧＸ",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "オックスファイアＶ２",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "アンガーファイア１",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "カウントボム２",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム２",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー２",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー２",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "アンガーファイア２",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム２",
                "class": "standard"
            },
            {
                "name": "ボボボンボム１",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー２",
                "class": "standard"
            },
            {
                "name": "カウントボム２",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "カウントボム２",
                "class": "standard"
            },
            {
                "name": "ファイア＋３０",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "オックスファイア",
                "class": "standard"
            }
        ],
        "access_code": "ODDTGC"
    },
    {
        "id": 14,
        "type": "meteor",
        "level": 14,
        "name": "エンプティー",
        "cards": [
            {
                "name": "ファイア＋３０",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "バブルフック２",
                "class": "standard"
            },
            {
                "name": "アクア＋３０",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ１",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "アンガーファイア１",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "シャークカッター１",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "ディバイドライン",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー１",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "イナズマヘッド１",
                "class": "standard"
            },
            {
                "name": "ローリングナッツ１",
                "class": "standard"
            },
            {
                "name": "ウッドスラッシュ",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "リカバリー１２０",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア１",
                "class": "standard"
            },
            {
                "name": "ウッド＋３０",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー２",
                "class": "standard"
            },
            {
                "name": "エレキ＋３０",
                "class": "standard"
            }
        ],
        "access_code": "ORIQRJ"
    },
    {
        "id": 15,
        "type": "meteor",
        "level": 15,
        "name": "ウルフ",
        "cards": [
            {
                "name": "ウルフフォレスト",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー２",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "コガラシ２",
                "class": "standard"
            },
            {
                "name": "ウルフフォレスト",
                "class": "standard"
            },
            {
                "name": "ソードファイター１",
                "class": "standard"
            },
            {
                "name": "ウッドスラッシュ",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "リカバリー１５０",
                "class": "standard"
            },
            {
                "name": "ウッドスラッシュ",
                "class": "standard"
            },
            {
                "name": "コガラシ２",
                "class": "standard"
            },
            {
                "name": "ソードファイター１",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "パウダーシュート２",
                "class": "standard"
            },
            {
                "name": "ジャングルストーム",
                "class": "standard"
            },
            {
                "name": "ウッド＋３０",
                "class": "standard"
            },
            {
                "name": "ローリングナッツ２",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "コガラシ２",
                "class": "standard"
            },
            {
                "name": "ウッド＋３０",
                "class": "standard"
            },
            {
                "name": "パウダーシュート２",
                "class": "standard"
            },
            {
                "name": "ジャングルストーム",
                "class": "standard"
            },
            {
                "name": "グリーングレネード",
                "class": "standard"
            },
            {
                "name": "ウッドスラッシュ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー２",
                "class": "standard"
            },
            {
                "name": "コガラシ２",
                "class": "standard"
            },
            {
                "name": "リカバリー１５０",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "コガラシ２",
                "class": "standard"
            },
            {
                "name": "ソードファイター１",
                "class": "standard"
            },
            {
                "name": "ウルフフォレスト",
                "class": "standard"
            },
            {
                "name": "ウッドスラッシュ",
                "class": "standard"
            },
            {
                "name": "ローリングナッツ２",
                "class": "standard"
            },
            {
                "name": "パウダーシュート２",
                "class": "standard"
            },
            {
                "name": "ウルフフォレスト",
                "class": "standard"
            }
        ],
        "access_code": "EOHKSG"
    },
    {
        "id": 16,
        "type": "meteor",
        "level": 16,
        "name": "ジェミニ",
        "cards": [
            {
                "name": "ジェミニスパーク",
                "class": "standard"
            },
            {
                "name": "スタンナックル",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー２",
                "class": "standard"
            },
            {
                "name": "ジェミニスパーク",
                "class": "standard"
            },
            {
                "name": "リカバリー１５０",
                "class": "standard"
            },
            {
                "name": "イナズマヘッド２",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "スタンナックル",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア２",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー２",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ２",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "スタンナックル",
                "class": "standard"
            },
            {
                "name": "サンダーオブアース２",
                "class": "standard"
            },
            {
                "name": "マミーハンド２",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー２",
                "class": "standard"
            },
            {
                "name": "イナズマヘッド２",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ディバイドライン",
                "class": "standard"
            },
            {
                "name": "サンダーオブアース２",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア２",
                "class": "standard"
            },
            {
                "name": "サンダーオブアース２",
                "class": "standard"
            },
            {
                "name": "リカバリー１５０",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "ジェミニスパーク",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー２",
                "class": "standard"
            },
            {
                "name": "ディバイドライン",
                "class": "standard"
            },
            {
                "name": "サンダーオブアース２",
                "class": "standard"
            },
            {
                "name": "ジェミニスパーク",
                "class": "standard"
            }
        ],
        "access_code": "NTSLJF"
    },
    {
        "id": 17,
        "type": "meteor",
        "level": 17,
        "name": "リブラ",
        "cards": [
            {
                "name": "リブラバランス",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ディバイドライン",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "リブラバランス",
                "class": "standard"
            },
            {
                "name": "カウントボム２",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ２",
                "class": "standard"
            },
            {
                "name": "ピウラニアキッス１",
                "class": "standard"
            },
            {
                "name": "アンガーファイア２",
                "class": "standard"
            },
            {
                "name": "シャークカッター２",
                "class": "standard"
            },
            {
                "name": "ファイア＋３０",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "アクア＋３０",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー２",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "バブルフック２",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "バブルフック２",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー２",
                "class": "standard"
            },
            {
                "name": "シャークカッター２",
                "class": "standard"
            },
            {
                "name": "リカバリー１５０",
                "class": "standard"
            },
            {
                "name": "ヒートグレネード",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ２",
                "class": "standard"
            },
            {
                "name": "リカバリー１５０",
                "class": "standard"
            },
            {
                "name": "リブラバランス",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "リブラバランス",
                "class": "standard"
            }
        ],
        "access_code": "BTCTHK"
    },
    {
        "id": 18,
        "type": "meteor",
        "level": 18,
        "name": "コーヴァス",
        "cards": [
            {
                "name": "ジャックコーヴァス",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム２",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "リカバリー１５０",
                "class": "standard"
            },
            {
                "name": "ジャックコーヴァス",
                "class": "standard"
            },
            {
                "name": "ヒートグレネード",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "ビーストスイング２",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー２",
                "class": "standard"
            },
            {
                "name": "スカルアロー２",
                "class": "standard"
            },
            {
                "name": "ヒートグレネード",
                "class": "standard"
            },
            {
                "name": "ダバフレイム２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ダバフレイム２",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー２",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "スカルアロー２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム２",
                "class": "standard"
            },
            {
                "name": "リカバリー１５０",
                "class": "standard"
            },
            {
                "name": "ビーストスイング２",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "ビーストスイング２",
                "class": "standard"
            },
            {
                "name": "ジャックコーヴァス",
                "class": "standard"
            },
            {
                "name": "ドリルアーム２",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "ジャックコーヴァス",
                "class": "standard"
            }
        ],
        "access_code": "JARBRD"
    },
    {
        "id": 19,
        "type": "meteor",
        "level": 19,
        "name": "コンドル",
        "cards": [
            {
                "name": "コンドルジオグラフ",
                "class": "standard"
            },
            {
                "name": "タイフーンダンス",
                "class": "standard"
            },
            {
                "name": "グリーングレネード",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "コンドルジオグラフ",
                "class": "standard"
            },
            {
                "name": "プラスキャノン",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "バルカンシード２",
                "class": "standard"
            },
            {
                "name": "パウダーシュート２",
                "class": "standard"
            },
            {
                "name": "ウッドスラッシュ",
                "class": "standard"
            },
            {
                "name": "タイフーンダンス",
                "class": "standard"
            },
            {
                "name": "グリーングレネード",
                "class": "standard"
            },
            {
                "name": "リカバリー１５０",
                "class": "standard"
            },
            {
                "name": "ジャングルストーム",
                "class": "standard"
            },
            {
                "name": "コガラシ２",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー２",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "バルカンシード２",
                "class": "standard"
            },
            {
                "name": "シュリシュリケン２",
                "class": "standard"
            },
            {
                "name": "ウッドスラッシュ",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "ローリングナッツ２",
                "class": "standard"
            },
            {
                "name": "パウダーシュート２",
                "class": "standard"
            },
            {
                "name": "ジャングルストーム",
                "class": "standard"
            },
            {
                "name": "コガラシ２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド２",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー２",
                "class": "standard"
            },
            {
                "name": "リカバリー１５０",
                "class": "standard"
            },
            {
                "name": "シュリシュリケン２",
                "class": "standard"
            },
            {
                "name": "コンドルジオグラフ",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "ローリングナッツ２",
                "class": "standard"
            },
            {
                "name": "パウダーシュート２",
                "class": "standard"
            },
            {
                "name": "コンドルジオグラフ",
                "class": "standard"
            }
        ],
        "access_code": "RQESEI"
    },
    {
        "id": 20,
        "type": "meteor",
        "level": 20,
        "name": "ムーン",
        "cards": [
            {
                "name": "ムーンディザスターＶ２",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "ホワイトメテオ",
                "class": "standard"
            },
            {
                "name": "ムーンディザスター",
                "class": "standard"
            },
            {
                "name": "ホワイトメテオ",
                "class": "standard"
            },
            {
                "name": "ケサランパサラン２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "スマイルコイン２",
                "class": "standard"
            },
            {
                "name": "ギザホイール２",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "リカバリー１５０",
                "class": "standard"
            },
            {
                "name": "クイックゲージ",
                "class": "standard"
            },
            {
                "name": "ムーンディザスター",
                "class": "standard"
            },
            {
                "name": "ホワイトメテオ",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "ケサランパサラン２",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "ムーンディザスター",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ビーストスイング３",
                "class": "standard"
            },
            {
                "name": "スマイルコイン２",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "リカバリー１５０",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック３",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "ムーンディザスター",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "スマイルコイン２",
                "class": "standard"
            },
            {
                "name": "ムーンディザスターＶ２",
                "class": "standard"
            }
        ],
        "access_code": "STALDA"
    },
    {
        "id": 21,
        "type": "meteor",
        "level": 21,
        "name": "スペード",
        "cards": [
            {
                "name": "スペードマグネッツＶ２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "スタンナックル",
                "class": "standard"
            },
            {
                "name": "スペードマグネッツＶ２",
                "class": "standard"
            },
            {
                "name": "イナズマヘッド２",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー２",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア２",
                "class": "standard"
            },
            {
                "name": "ヒールウィザード１",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "イナズマヘッド２",
                "class": "standard"
            },
            {
                "name": "イナズマヘッド２",
                "class": "standard"
            },
            {
                "name": "マミーハンド２",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ステスルレーザー２",
                "class": "standard"
            },
            {
                "name": "ヒールウィザード２",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "スペードマグネッツ",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア２",
                "class": "standard"
            },
            {
                "name": "スタンナックル",
                "class": "standard"
            },
            {
                "name": "マミーハンド２",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "アクシスジェット",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ステスルレーザー２",
                "class": "standard"
            },
            {
                "name": "スペードマグネッツＶ２",
                "class": "standard"
            }
        ],
        "access_code": "HRHPQA"
    },
    {
        "id": 22,
        "type": "meteor",
        "level": 22,
        "name": "オリガ",
        "cards": [
            {
                "name": "オリガジェネラルＶ２",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＶ２",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ジェットアタック３",
                "class": "standard"
            },
            {
                "name": "スマイルコイン３",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "ジェットアタック３",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "スマイルコイン３",
                "class": "standard"
            },
            {
                "name": "ヘビードーン３",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＶ２",
                "class": "standard"
            },
            {
                "name": "ヘビードーン３",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "ジェットアタック３",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＶ２",
                "class": "standard"
            }
        ],
        "access_code": "ASHPLO"
    },
    {
        "id": 23,
        "type": "meteor",
        "level": 23,
        "name": "ヴァルゴ",
        "cards": [
            {
                "name": "クイーンヴァルゴＶ２",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ３",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ３",
                "class": "standard"
            },
            {
                "name": "クイーンヴァルゴＶ２",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "アイスグレネード",
                "class": "standard"
            },
            {
                "name": "アイススピニング３",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ３",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ３",
                "class": "standard"
            },
            {
                "name": "ピラニアキッス３",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "ジェットアタック３",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "アイスグレネード",
                "class": "standard"
            },
            {
                "name": "アイススピニング３",
                "class": "standard"
            },
            {
                "name": "バブルフック３",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "クイーンヴァルゴ",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ３",
                "class": "standard"
            },
            {
                "name": "ピラニアキッス３",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ３",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "バブルフック３",
                "class": "standard"
            },
            {
                "name": "ライトオブセイント",
                "class": "standard"
            },
            {
                "name": "フリーズナックル",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "アイススピニング３",
                "class": "standard"
            },
            {
                "name": "クイーンヴァルゴＶ２",
                "class": "standard"
            }
        ],
        "access_code": "ICBRLJ"
    },
    {
        "id": 24,
        "type": "meteor",
        "level": 24,
        "name": "ペガサス",
        "cards": [
            {
                "name": "クイーンヴァルゴＶ２",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "アイスグレネード",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "ペガサスマジックＧＸ",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ピラニアキッス３",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ３",
                "class": "standard"
            },
            {
                "name": "アイスグレネード",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ピラニアキッス３",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "アクア＋３０",
                "class": "standard"
            },
            {
                "name": "アイスステージ",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "フリーズナックル",
                "class": "standard"
            },
            {
                "name": "ピラニアキッス３",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "ダイヤアイスバーンＶ２",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "ダイヤアイスバーンＶ２",
                "class": "standard"
            }
        ],
        "access_code": "BBMFTN"
    },
    {
        "id": 25,
        "type": "meteor",
        "level": 25,
        "name": "エース",
        "cards": [
            {
                "name": "アシッドエースＶ３",
                "class": "standard"
            },
            {
                "name": "マッドバルカン３",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "アシッドエースＶ３",
                "class": "standard"
            },
            {
                "name": "ダバフレイム３",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ３",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "マッドバルカン３",
                "class": "standard"
            },
            {
                "name": "マッドバルカン３",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "アシッドエースＶ２",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ３",
                "class": "standard"
            },
            {
                "name": "ダバフレイム３",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "アシッドエース",
                "class": "standard"
            },
            {
                "name": "マッドバルカン３",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー３",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ３",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー３",
                "class": "standard"
            },
            {
                "name": "コガラシ３",
                "class": "standard"
            },
            {
                "name": "ウィングブレード",
                "class": "standard"
            },
            {
                "name": "コガラシ３",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "マッドバルカン３",
                "class": "standard"
            },
            {
                "name": "アシッドエースＶ３",
                "class": "standard"
            }
        ],
        "access_code": "DRMODK"
    },
    {
        "id": 26,
        "type": "meteor",
        "level": 26,
        "name": "アンドロメダ",
        "cards": [
            {
                "name": "ドラゴンスカイＧＸ",
                "class": "standard"
            },
            {
                "name": "コガラシ３",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "レオキングダムＧＸ",
                "class": "standard"
            },
            {
                "name": "バルカンシード２",
                "class": "standard"
            },
            {
                "name": "レーダーミサイル",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "コガラシ",
                "class": "standard"
            },
            {
                "name": "リカバリー３００",
                "class": "standard"
            },
            {
                "name": "ディバイドライン",
                "class": "standard"
            },
            {
                "name": "サンダーオブアース３",
                "class": "standard"
            },
            {
                "name": "ダバフレイム２",
                "class": "standard"
            },
            {
                "name": "マッドバルカン３",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ３",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ２",
                "class": "standard"
            },
            {
                "name": "アイスグレネード",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "リカバリー３００",
                "class": "standard"
            },
            {
                "name": "イナズマヘッド２",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア２",
                "class": "standard"
            },
            {
                "name": "ペガサスマジックＧＸ",
                "class": "standard"
            },
            {
                "name": "シルバーメテオ",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            }
        ],
        "access_code": "TAPQBO"
    },
    {
        "id": 27,
        "type": "meteor",
        "level": 27,
        "name": "ブライ",
        "cards": [
            {
                "name": "ブライＶ３",
                "class": "standard"
            },
            {
                "name": "ポイズンナックル",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "ブライＶ２",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "リカバリー３００",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "ダンシングブレード３",
                "class": "standard"
            },
            {
                "name": "シンクロフック２",
                "class": "standard"
            },
            {
                "name": "アタック＋１０",
                "class": "standard"
            },
            {
                "name": "ブライＶ２",
                "class": "standard"
            },
            {
                "name": "フリーズナックル",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "スタンナックル",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブ３",
                "class": "standard"
            },
            {
                "name": "シンクロフック３",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "ダンシングブレード３",
                "class": "standard"
            },
            {
                "name": "スタンナックル",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "スタンナックル",
                "class": "standard"
            },
            {
                "name": "リカバリー３００",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "ヒートアッパー３",
                "class": "standard"
            },
            {
                "name": "ブライＶ３",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "シンクロフック３",
                "class": "standard"
            },
            {
                "name": "ブライブレイク",
                "class": "standard"
            }
        ],
        "access_code": "KEKSNP"
    },
    {
        "id": 28,
        "type": "meteor",
        "level": 28,
        "name": "ブルース",
        "cards": [
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "ムラマサブレード",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "ウッドスラッシュ",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "ウッドスラッシュ",
                "class": "standard"
            },
            {
                "name": "リカバリー３００",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "リカバリー３００",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "ウッドスラッシュ",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "ダンシングブレード３",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ムラマサブレード",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            }
        ],
        "access_code": "OOAIRG"
    },
    {
        "id": 29,
        "type": "meteor",
        "level": 29,
        "name": "ドラゴン",
        "cards": [
            {
                "name": "ドラゴンスカイＧＸ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー３",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "ストロングスイングＶ２",
                "class": "standard"
            },
            {
                "name": "バルカンシード３",
                "class": "standard"
            },
            {
                "name": "シュリシュリケン３",
                "class": "standard"
            },
            {
                "name": "コガラシ３",
                "class": "standard"
            },
            {
                "name": "ローリングナッツ３",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "ウッドスラッシュ",
                "class": "standard"
            },
            {
                "name": "ウッド＋３０",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "パウダーシュート３",
                "class": "standard"
            },
            {
                "name": "シュリシュリケン３",
                "class": "standard"
            },
            {
                "name": "バルカンシード３",
                "class": "standard"
            },
            {
                "name": "パニッククラウド",
                "class": "standard"
            },
            {
                "name": "グリーングレネード",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "カウントボム３",
                "class": "standard"
            },
            {
                "name": "パウダーシュート３",
                "class": "standard"
            },
            {
                "name": "シュリシュリケン３",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "ダバフレイム３",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー３",
                "class": "standard"
            },
            {
                "name": "ローリングナッツ３",
                "class": "standard"
            },
            {
                "name": "パニッククラウド",
                "class": "standard"
            },
            {
                "name": "ウッドスラッシュ",
                "class": "standard"
            },
            {
                "name": "ストロングスイングＶ２",
                "class": "standard"
            },
            {
                "name": "ウッドスラッシュ",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "ドラゴンスカイＧＸ",
                "class": "standard"
            }
        ],
        "access_code": "LCQLQL"
    },
    {
        "id": 30,
        "type": "meteor",
        "level": 30,
        "name": "ジョーカー",
        "cards": [
            {
                "name": "グレイブジョーカーＶ３",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "カウントボム３",
                "class": "standard"
            },
            {
                "name": "グレイブジョーカーＶ３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ヘビードーン３",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "カウントボム３",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "グレイブジョーカーＶ２",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "カウントボム３",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "グレイブジョーカーＶ２",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "ドリルアーム３",
                "class": "standard"
            },
            {
                "name": "リカバリー２００",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "カウントボム３",
                "class": "standard"
            },
            {
                "name": "グレイブジョーカーＶ３",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "Ｇメテオレーザー",
                "class": "standard"
            }
        ],
        "access_code": "HLBQTO"
    },
    {
        "id": 31,
        "type": "meteor",
        "level": 31,
        "name": "ラ・ムー",
        "cards": [
            {
                "name": "アポロンフレイムＶ３",
                "class": "standard"
            },
            {
                "name": "マッドバルカン３",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー３",
                "class": "standard"
            },
            {
                "name": "ファントムブラックＶ３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー３",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "ファントムブラック",
                "class": "standard"
            },
            {
                "name": "マッドバルカン３",
                "class": "standard"
            },
            {
                "name": "アポロンフレイム",
                "class": "standard"
            },
            {
                "name": "リカバリー３００",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "ヘビーキャノン",
                "class": "standard"
            },
            {
                "name": "ビーストスイング３",
                "class": "standard"
            },
            {
                "name": "マッドバルカン３",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "ビーストスイング３",
                "class": "standard"
            },
            {
                "name": "バルカンシード３",
                "class": "standard"
            },
            {
                "name": "バルカンシード３",
                "class": "standard"
            },
            {
                "name": "ブラキオウェーブ",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "オリガジェネラル",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "リカバリー３００",
                "class": "standard"
            },
            {
                "name": "バルカンシード３",
                "class": "standard"
            },
            {
                "name": "ステルスレーザー３",
                "class": "standard"
            },
            {
                "name": "マッドバルカン３",
                "class": "standard"
            },
            {
                "name": "ブラキオウェーブＶ３",
                "class": "standard"
            },
            {
                "name": "ビーストスイング３",
                "class": "standard"
            },
            {
                "name": "ダブルイーター",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＶ３",
                "class": "standard"
            }
        ],
        "access_code": "AODQRR"
    },
    {
        "id": 32,
        "type": "meteor",
        "level": 32,
        "name": "フォルテ",
        "cards": [
            {
                "name": "ダークネスホール",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "スカルアロー３",
                "class": "standard"
            },
            {
                "name": "サウザンドキック",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム３",
                "class": "standard"
            },
            {
                "name": "スマイルコイン３",
                "class": "standard"
            },
            {
                "name": "グラビティプラス",
                "class": "standard"
            },
            {
                "name": "エアスプレッド３",
                "class": "standard"
            },
            {
                "name": "バルカンシード３",
                "class": "standard"
            },
            {
                "name": "ダバフレイム３",
                "class": "standard"
            },
            {
                "name": "リカバリー３００",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "アクシスジェット",
                "class": "standard"
            },
            {
                "name": "ダバフレイム３",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "シルバーメテオ",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "ダバフレイム３",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム３",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム３",
                "class": "standard"
            },
            {
                "name": "ストロングスイング",
                "class": "standard"
            },
            {
                "name": "パラライズステージ",
                "class": "standard"
            },
            {
                "name": "リカバリー３００",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "ブルーインク",
                "class": "standard"
            },
            {
                "name": "マヒプラス",
                "class": "standard"
            },
            {
                "name": "シルバーメテオ",
                "class": "standard"
            },
            {
                "name": "バルカンシード３",
                "class": "standard"
            },
            {
                "name": "Ｂアイスハンマー",
                "class": "standard"
            },
            {
                "name": "バルカンシード３",
                "class": "standard"
            },
            {
                "name": "アタックパネル",
                "class": "standard"
            },
            {
                "name": "スマイルコイン３",
                "class": "standard"
            },
            {
                "name": "バスターマックス",
                "class": "standard"
            }
        ],
        "access_code": "ROFHKO"
    },
    {
        "id": 33,
        "type": "satellite",
        "level": 1,
        "name": "アルファ",
        "cards": [
            {
                "name": "アシッドエースＶ３",
                "class": "standard"
            },
            {
                "name": "ダンシングブレード３",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック３",
                "class": "standard"
            },
            {
                "name": "ダンシングブレード３",
                "class": "standard"
            },
            {
                "name": "ウィングブレード",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "スカルアロー３",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "プラズマガンＸ",
                "class": "standard"
            },
            {
                "name": "コガラシ３",
                "class": "standard"
            },
            {
                "name": "プラズマガンＸ",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ３",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブＸ",
                "class": "standard"
            },
            {
                "name": "ダンシングブレード３",
                "class": "standard"
            },
            {
                "name": "ダンシングブレード３",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック３",
                "class": "standard"
            },
            {
                "name": "プラズマガンＸ",
                "class": "standard"
            },
            {
                "name": "スカルアロー３",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ３",
                "class": "standard"
            },
            {
                "name": "アシッドエースＶ２",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "プラズマガンＸ",
                "class": "standard"
            },
            {
                "name": "コガラシ３",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "スカルアロー３",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブＸ",
                "class": "standard"
            },
            {
                "name": "ウィングブレード",
                "class": "standard"
            },
            {
                "name": "ダンシングブレード３",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック３",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ３",
                "class": "standard"
            },
            {
                "name": "アクシスジェットＶ３",
                "class": "standard"
            }
        ],
        "access_code": "PMLSIL"
    },
    {
        "id": 34,
        "type": "satellite",
        "level": 2,
        "name": "ベータ",
        "cards": [
            {
                "name": "アシッドエースＶ３",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック３",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ３",
                "class": "standard"
            },
            {
                "name": "ウィングブレード",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブＸ",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "スカルアロー３",
                "class": "standard"
            },
            {
                "name": "コガラシＸ",
                "class": "standard"
            },
            {
                "name": "プラズマガンＸ",
                "class": "standard"
            },
            {
                "name": "コガラシＸ",
                "class": "standard"
            },
            {
                "name": "プラズマガンＸ",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ３",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブＸ",
                "class": "standard"
            },
            {
                "name": "ダンシングブレード３",
                "class": "standard"
            },
            {
                "name": "ダンシングブレード３",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック３",
                "class": "standard"
            },
            {
                "name": "プラズマガンＸ",
                "class": "standard"
            },
            {
                "name": "スカルアロー３",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ３",
                "class": "standard"
            },
            {
                "name": "アシッドエースＶ２",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "プラズマガンＸ",
                "class": "standard"
            },
            {
                "name": "コガラシＸ",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブＸ",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "スカルアロー３",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "グランドウェーブ３",
                "class": "standard"
            },
            {
                "name": "ウィングブレード",
                "class": "standard"
            },
            {
                "name": "ダンシングブレード３",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック３",
                "class": "standard"
            },
            {
                "name": "ワイドウェーブＸ",
                "class": "standard"
            },
            {
                "name": "アクシスジェットＶ３",
                "class": "standard"
            }
        ],
        "access_code": "IQPNDL"
    },
    {
        "id": 35,
        "type": "satellite",
        "level": 3,
        "name": "ガンマ",
        "cards": [
            {
                "name": "アクシスジェットＶ３",
                "class": "standard"
            },
            {
                "name": "ダンシングブレードＸ",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック３",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "アシッドエースＶ３",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "アシッドエースＶ３",
                "class": "standard"
            },
            {
                "name": "プラズマガンＸ",
                "class": "standard"
            },
            {
                "name": "ダンシングブレードＸ",
                "class": "standard"
            },
            {
                "name": "スカルアロー３",
                "class": "standard"
            },
            {
                "name": "コガラシＸ",
                "class": "standard"
            },
            {
                "name": "ダンシングブレードＸ",
                "class": "standard"
            },
            {
                "name": "スカルアロー３",
                "class": "standard"
            },
            {
                "name": "コガラシＸ",
                "class": "standard"
            },
            {
                "name": "ダンシングブレードＸ",
                "class": "standard"
            },
            {
                "name": "プラズマガンＸ",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック３",
                "class": "standard"
            },
            {
                "name": "グランドウェーブＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "エドギリブレード３",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "スカルアロー３",
                "class": "standard"
            },
            {
                "name": "ダンシングブレードＸ",
                "class": "standard"
            },
            {
                "name": "プラズマガンＸ",
                "class": "standard"
            },
            {
                "name": "シリウスＶ３",
                "class": "standard"
            },
            {
                "name": "コガラシＸ",
                "class": "standard"
            },
            {
                "name": "ウィングブレード",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "ウィンディアタック３",
                "class": "standard"
            },
            {
                "name": "グランドウェーブＸ",
                "class": "standard"
            },
            {
                "name": "シリウスＶ３",
                "class": "standard"
            }
        ],
        "access_code": "PQBSMA"
    },
    {
        "id": 36,
        "type": "satellite",
        "level": 4,
        "name": "デルタ",
        "cards": [
            {
                "name": "アシッドエースＸ",
                "class": "standard"
            },
            {
                "name": "スカルアローＸ",
                "class": "standard"
            },
            {
                "name": "シュリシュリケンＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "アクシスジェットＶ３",
                "class": "standard"
            },
            {
                "name": "エドギリブレードＸ",
                "class": "standard"
            },
            {
                "name": "グランドウェーブＸ",
                "class": "standard"
            },
            {
                "name": "エドギリブレードＸ",
                "class": "standard"
            },
            {
                "name": "タイフーンダンス",
                "class": "standard"
            },
            {
                "name": "エドギリブレードＸ",
                "class": "standard"
            },
            {
                "name": "ダンシングブレードＸ",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "シュリシュリケンＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "タイフーンダンス",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "スカルアローＸ",
                "class": "standard"
            },
            {
                "name": "タイフーンダンス",
                "class": "standard"
            },
            {
                "name": "グランドウェーブＸ",
                "class": "standard"
            },
            {
                "name": "エドギリブレードＸ",
                "class": "standard"
            },
            {
                "name": "グランドウェーブＸ",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "シュリシュリケンＸ",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "シャークカッター３",
                "class": "standard"
            },
            {
                "name": "スカルアローＸ",
                "class": "standard"
            },
            {
                "name": "タイフーンダンス",
                "class": "standard"
            },
            {
                "name": "アクシスジェットＶ３",
                "class": "standard"
            },
            {
                "name": "ダンシングブレードＸ",
                "class": "standard"
            },
            {
                "name": "シリウスＶ３",
                "class": "standard"
            },
            {
                "name": "シュリシュリケンＸ",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "スカルアローＸ",
                "class": "standard"
            },
            {
                "name": "ウィングブレード",
                "class": "standard"
            }
        ],
        "access_code": "BPQHIR"
    },
    {
        "id": 37,
        "type": "satellite",
        "level": 5,
        "name": "イプシロン",
        "cards": [
            {
                "name": "アシッドエースＧＡ",
                "class": "standard"
            },
            {
                "name": "タイフーンダンス",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "ダンシングブレードＸ",
                "class": "standard"
            },
            {
                "name": "ウィングブレード",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "シャークカッターＸ",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "シャークカッターＸ",
                "class": "standard"
            },
            {
                "name": "シュリシュリケンＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "ダンシングブレードＸ",
                "class": "standard"
            },
            {
                "name": "シュリシュリケンＸ",
                "class": "standard"
            },
            {
                "name": "シャークカッターＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "タイフーンダンス",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ダンシングブレードＸ",
                "class": "standard"
            },
            {
                "name": "タイフーンダンス",
                "class": "standard"
            },
            {
                "name": "シャークカッターＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー３",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "アシッドエースＧＡ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー３",
                "class": "standard"
            },
            {
                "name": "アクシスジェットＶ３",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー３",
                "class": "standard"
            },
            {
                "name": "ダンシングブレードＸ",
                "class": "standard"
            },
            {
                "name": "シリウスＶ３",
                "class": "standard"
            }
        ],
        "access_code": "KMPOJL"
    },
    {
        "id": 38,
        "type": "satellite",
        "level": 6,
        "name": "ゼータ",
        "cards": [
            {
                "name": "シリウスＶ３",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "シュリシュリケンＸ",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "アシッドエースＧＡ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "バブルフック３",
                "class": "standard"
            },
            {
                "name": "ウィンディアタックＸ",
                "class": "standard"
            },
            {
                "name": "アクシスジェットＶ３",
                "class": "standard"
            },
            {
                "name": "バブルフック３",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー３",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "ウィンディアタックＸ",
                "class": "standard"
            },
            {
                "name": "シュリシュリケンＸ",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "ウィンディアタックＸ",
                "class": "standard"
            },
            {
                "name": "シュリシュリケンＸ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー３",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "バブルフック３",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "ダイヤアイスバーンＶ３",
                "class": "standard"
            },
            {
                "name": "ウィンディアタックＸ",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "アクシスジェットＶ３",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "ダミースパイダー３",
                "class": "standard"
            },
            {
                "name": "エレキスラッシュ",
                "class": "standard"
            },
            {
                "name": "ウィングブレード",
                "class": "standard"
            }
        ],
        "access_code": "KQJADC"
    },
    {
        "id": 39,
        "type": "satellite",
        "level": 7,
        "name": "イータ",
        "cards": [
            {
                "name": "ウィングブレード",
                "class": "standard"
            },
            {
                "name": "バルカンシード３",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ダイヤアイスバーンＶ３",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "ウィンディアタックＸ",
                "class": "standard"
            },
            {
                "name": "バルカンシード３",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "バルカンシード３",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "ウィンディアタックＸ",
                "class": "standard"
            },
            {
                "name": "バルカンシード３",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "ソードファイター３",
                "class": "standard"
            },
            {
                "name": "スペードマグネッツＧＡ",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "アクシスジェットＶ３",
                "class": "standard"
            },
            {
                "name": "ウィンディアタックＸ",
                "class": "standard"
            },
            {
                "name": "アシッドエースＧＡ",
                "class": "standard"
            },
            {
                "name": "バルカンシード３",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "シリウスＶ３",
                "class": "standard"
            }
        ],
        "access_code": "SOEPQP"
    },
    {
        "id": 40,
        "type": "satellite",
        "level": 8,
        "name": "シータ",
        "cards": [
            {
                "name": "ウィングブレード",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "ダイヤアイスバーンＶ３",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "スペードマグネッツＶ３",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "アシッドエースＧＡ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "バルカンシードＸ",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "バルカンシードＸ",
                "class": "standard"
            },
            {
                "name": "ジェミニスパークＶ３",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "スペードマグネッツＧＡ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "アクシスジェットＶ３",
                "class": "standard"
            },
            {
                "name": "フラッシュスピア３",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "シリウスＶ３",
                "class": "standard"
            }
        ],
        "access_code": "CTPFKF"
    },
    {
        "id": 41,
        "type": "satellite",
        "level": 9,
        "name": "イオタ",
        "cards": [
            {
                "name": "ウィングブレード",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "バルカンシードＸ",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "スペードマグネッツＧＡ",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "ジェミニスパークＶ３",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "バルカンシードＸ",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "バルカンシードＸ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "アシッドエースＧＡ",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "バルカンシードＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "アクシスジェットＶ３",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "ダイヤアイスバーンＸ",
                "class": "standard"
            },
            {
                "name": "トルネードダンス",
                "class": "standard"
            },
            {
                "name": "シリウスＸ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "ジェミニサンダー",
                "class": "standard"
            }
        ],
        "access_code": "MTRRQK"
    },
    {
        "id": 42,
        "type": "satellite",
        "level": 10,
        "name": "カッパ",
        "cards": [
            {
                "name": "ウィングブレード",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "バルカンシードＸ",
                "class": "standard"
            },
            {
                "name": "ハリケーンダンス",
                "class": "standard"
            },
            {
                "name": "アシッドエースＧＡ",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "スペードマグネッツＧＡ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "ダイヤアイスバーンＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "ハリケーンダンス",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "クラウンサンダーＧＡ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "アクシスジェットＸ",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "ハリケーンダンス",
                "class": "standard"
            },
            {
                "name": "スペードマグネッツＸ",
                "class": "standard"
            },
            {
                "name": "ハリケーンダンス",
                "class": "standard"
            },
            {
                "name": "ジェミニスパークＸ",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "シリウスＸ",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "バルカンシードＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "ジェミニサンダー",
                "class": "standard"
            }
        ],
        "access_code": "DLIOPK"
    },
    {
        "id": 43,
        "type": "satellite",
        "level": 11,
        "name": "ラムダ",
        "cards": [
            {
                "name": "ダイヤアイスバーンＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "ハリケーンダンス",
                "class": "standard"
            },
            {
                "name": "ウィングブレード",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "ジェミニスパークＸ",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "アクシスジェットＸ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "ハリケーンダンス",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "クラウンサンダーＧＡ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "スペードマグネッツＧＡ",
                "class": "standard"
            },
            {
                "name": "ハリケーンダンス",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "ハリケーンダンス",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "アシッドエースＧＡ",
                "class": "standard"
            },
            {
                "name": "バブルフックＸ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ジェミニサンダー",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "ハリケーンダンス",
                "class": "standard"
            },
            {
                "name": "シリウスＸ",
                "class": "standard"
            }
        ],
        "access_code": "GABJKK"
    },
    {
        "id": 44,
        "type": "satellite",
        "level": 12,
        "name": "ミュー",
        "cards": [
            {
                "name": "ウィングブレード",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "ハリケーンダンス",
                "class": "standard"
            },
            {
                "name": "ジェミニサンダー",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "クラウンサンダーＧＡ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "アクシスジェットＸ",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "ハリケーンダンス",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "ダイヤアイスバーンＸ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "ハリケーンダンス",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "スペードマグネッツＧＡ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ハリケーンダンス",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "シリウスＸ",
                "class": "standard"
            },
            {
                "name": "ダミースパイダーＸ",
                "class": "standard"
            },
            {
                "name": "ジェミニスパークＸ",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "アシッドエースＧＡ",
                "class": "standard"
            },
            {
                "name": "フラッシュスピアＸ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "ソードファイターＸ",
                "class": "standard"
            },
            {
                "name": "ライトオブセイントＧＡ",
                "class": "standard"
            }
        ],
        "access_code": "KGPAQL"
    },
    {
        "id": 45,
        "type": "satellite",
        "level": 13,
        "name": "ニュー",
        "cards": [
            {
                "name": "Ｇメテオレーザー",
                "class": "standard"
            },
            {
                "name": "ジェットアタック３",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "シンクロフック３",
                "class": "standard"
            },
            {
                "name": "ストロングスイングＶ３",
                "class": "standard"
            },
            {
                "name": "ビッググレネード",
                "class": "standard"
            },
            {
                "name": "ヘビードーンＸ",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "ビッググレネード",
                "class": "standard"
            },
            {
                "name": "ヒートアッパーＸ",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム３",
                "class": "standard"
            },
            {
                "name": "シンクロフック３",
                "class": "standard"
            },
            {
                "name": "ヘビードーンＸ",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム３",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "ヘビードーンＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ヒートアッパーＸ",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "ジェットアタック３",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム３",
                "class": "standard"
            },
            {
                "name": "シンクロフック３",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム３",
                "class": "standard"
            },
            {
                "name": "ヘビードーンＸ",
                "class": "standard"
            },
            {
                "name": "ビッググレネード",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "ヘビードーンＸ",
                "class": "standard"
            },
            {
                "name": "ヒートアッパーＸ",
                "class": "standard"
            },
            {
                "name": "グレイブジョーカーＶ３",
                "class": "standard"
            },
            {
                "name": "ジェットアタック３",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "シンクロフック３",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            }
        ],
        "access_code": "KBOOBA"
    },
    {
        "id": 46,
        "type": "satellite",
        "level": 14,
        "name": "クサイ",
        "cards": [
            {
                "name": "グレイブジョーカーＶ３",
                "class": "standard"
            },
            {
                "name": "シンクロフック３",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "ヘビードーンＸ",
                "class": "standard"
            },
            {
                "name": "ストロングスイングＶ３",
                "class": "standard"
            },
            {
                "name": "ジェットアタックＸ",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "ビッググレネード",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム３",
                "class": "standard"
            },
            {
                "name": "ヒートアッパーＸ",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "シンクロフック３",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "ヘビードーンＸ",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "ヒートアッパーＸ",
                "class": "standard"
            },
            {
                "name": "ビッググレネード",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ジェットアタックＸ",
                "class": "standard"
            },
            {
                "name": "ジェットアタックＸ",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム３",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "マシーンフレイム３",
                "class": "standard"
            },
            {
                "name": "ヘビードーンＸ",
                "class": "standard"
            },
            {
                "name": "ジェットアタックＸ",
                "class": "standard"
            },
            {
                "name": "ビッググレネード",
                "class": "standard"
            },
            {
                "name": "シンクロフック３",
                "class": "standard"
            },
            {
                "name": "ジェットアタックＸ",
                "class": "standard"
            },
            {
                "name": "ヒートアッパーＸ",
                "class": "standard"
            },
            {
                "name": "Ｇメテオレーザー",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "ヘビードーンＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            }
        ],
        "access_code": "FSSJKR"
    },
    {
        "id": 47,
        "type": "satellite",
        "level": 15,
        "name": "オミクロン",
        "cards": [
            {
                "name": "ストロングスイングＶ３",
                "class": "standard"
            },
            {
                "name": "ビッググレネード",
                "class": "standard"
            },
            {
                "name": "ボボボンボム３",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "Ｇメテオレーザー",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "ビッググレネード",
                "class": "standard"
            },
            {
                "name": "マシーンフレイムＸ",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "ヘビードーンＸ",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "シンクロフックＸ",
                "class": "standard"
            },
            {
                "name": "ビッググレネード",
                "class": "standard"
            },
            {
                "name": "マシーンフレイムＸ",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "ボボボンボム３",
                "class": "standard"
            },
            {
                "name": "ヘビードーンＸ",
                "class": "standard"
            },
            {
                "name": "ボボボンボム３",
                "class": "standard"
            },
            {
                "name": "シンクロフックＸ",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "マシーンフレイムＸ",
                "class": "standard"
            },
            {
                "name": "グレートアックス",
                "class": "standard"
            },
            {
                "name": "シンクロフックＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ビッググレネード",
                "class": "standard"
            },
            {
                "name": "シンクロフックＸ",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＶ３",
                "class": "standard"
            },
            {
                "name": "ギザホイール３",
                "class": "standard"
            },
            {
                "name": "ボボボンボム３",
                "class": "standard"
            },
            {
                "name": "ヘビードーンＸ",
                "class": "standard"
            },
            {
                "name": "グレイブジョーカーＶ３",
                "class": "standard"
            }
        ],
        "access_code": "GJTHIR"
    },
    {
        "id": 48,
        "type": "satellite",
        "level": 16,
        "name": "パイ",
        "cards": [
            {
                "name": "Ｇメテオレーザー",
                "class": "standard"
            },
            {
                "name": "ギザホイールＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "グレイブジョーカーＸ",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "シンクロフックＸ",
                "class": "standard"
            },
            {
                "name": "マシーンフレイムＸ",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "ギザホイールＸ",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "シンクロフックＸ",
                "class": "standard"
            },
            {
                "name": "ボボボンボム３",
                "class": "standard"
            },
            {
                "name": "シンクロフックＸ",
                "class": "standard"
            },
            {
                "name": "マシーンフレイムＸ",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "シンクロフックＸ",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "シンクロフックＸ",
                "class": "standard"
            },
            {
                "name": "ギザホイールＸ",
                "class": "standard"
            },
            {
                "name": "ギザホイールＸ",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "シンクロフックＸ",
                "class": "standard"
            },
            {
                "name": "ボボボンボム３",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "ストロングスイングＶ３",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ギザホイールＸ",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＶ３",
                "class": "standard"
            }
        ],
        "access_code": "TCDRNE"
    },
    {
        "id": 49,
        "type": "satellite",
        "level": 17,
        "name": "ロー",
        "cards": [
            {
                "name": "グレイブジョーカーＧＡ",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "ダバフレイム３",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＶ３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ギザホイールＸ",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "ギザホイールＸ",
                "class": "standard"
            },
            {
                "name": "ダバフレイム３",
                "class": "standard"
            },
            {
                "name": "ボボボンボムＸ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "ボボボンボムＸ",
                "class": "standard"
            },
            {
                "name": "ダバフレイム３",
                "class": "standard"
            },
            {
                "name": "ギザホイールＸ",
                "class": "standard"
            },
            {
                "name": "ボボボンボムＸ",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "ダバフレイム３",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "Ｇメテオレーザー",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "ギザホイールＸ",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "ストロングスイングＶ３",
                "class": "standard"
            }
        ],
        "access_code": "ORMGFL"
    },
    {
        "id": 50,
        "type": "satellite",
        "level": 18,
        "name": "シグマ",
        "cards": [
            {
                "name": "グレイブジョーカーＧＡ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "Ｇメテオレーザー",
                "class": "standard"
            },
            {
                "name": "ボボボンボムＸ",
                "class": "standard"
            },
            {
                "name": "ダバフレイムＸ",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＶ３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "ダバフレイムＸ",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＶ３",
                "class": "standard"
            },
            {
                "name": "ダバフレイムＸ",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "ボボボンボムＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "ダバフレイムＸ",
                "class": "standard"
            },
            {
                "name": "フレイムアックス",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ストロングスイングＶ３",
                "class": "standard"
            },
            {
                "name": "ファイアスラッシュ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ボボボンボムＸ",
                "class": "standard"
            },
            {
                "name": "アポロンフレイムＶ３",
                "class": "standard"
            }
        ],
        "access_code": "ONOETM"
    },
    {
        "id": 51,
        "type": "satellite",
        "level": 19,
        "name": "タウ",
        "cards": [
            {
                "name": "ストロングスイングＶ３",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "カウントボム３",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＶ３",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "グレイブジョーカーＧＡ",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "オックスファイアＧＡ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "カウントボム３",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "ダバフレイムＸ",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "カウントボム３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベル",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "ダバフレイムＸ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポン３",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "アポロンフレイムＶ３",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "カウントボム３",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "Ｇメテオレーザー",
                "class": "standard"
            }
        ],
        "access_code": "TFRFEC"
    },
    {
        "id": 52,
        "type": "satellite",
        "level": 20,
        "name": "ユプシロン",
        "cards": [
            {
                "name": "Ｇメテオレーザー",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "ストロングスイングＶ３",
                "class": "standard"
            },
            {
                "name": "カウントボムＸ",
                "class": "standard"
            },
            {
                "name": "ムーンディザスターＶ３",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "グレイブジョーカーＧＡ",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "カウントボムＸ",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "オックスファイアＧＡ",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＶ３",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "カウントボムＸ",
                "class": "standard"
            },
            {
                "name": "アポロンフレイムＶ３",
                "class": "standard"
            }
        ],
        "access_code": "SNMFIL"
    },
    {
        "id": 53,
        "type": "satellite",
        "level": 21,
        "name": "ファイ",
        "cards": [
            {
                "name": "アポロンフレイムＶ３",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "Ｇメテオレーザー",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ストロングスイングＸ",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "オックスファイアＧＡ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ムーンディザスターＶ３",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＸ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ブレイクカウントボム",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "グレイブジョーカーＧＡ",
                "class": "standard"
            }
        ],
        "access_code": "FNHHEF"
    },
    {
        "id": 54,
        "type": "satellite",
        "level": 22,
        "name": "カイ",
        "cards": [
            {
                "name": "ブレイクカウントボム",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "アポロンフレイムＸ",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "ＢアイスハンマーＧＡ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ストロングスイングＸ",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "オックスファイアＧＡ",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "グレイブジョーカーＧＡ",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "ムーンディザスターＸ",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "Ｇメテオレーザー",
                "class": "standard"
            }
        ],
        "access_code": "RHROMD"
    },
    {
        "id": 55,
        "type": "satellite",
        "level": 23,
        "name": "プサイ",
        "cards": [
            {
                "name": "オリガジェネラルＸ",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "ブレイクカウントボム",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "グレイブジョーカーＧＡ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "ＢアイスハンマーＧＡ",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "オックスファイアＧＡ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ストロングスイングＸ",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "ムーンディザスターＸ",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "Ｇメテオレーザー",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "アポロンフレイムＸ",
                "class": "standard"
            }
        ],
        "access_code": "ONKIDS"
    },
    {
        "id": 56,
        "type": "satellite",
        "level": 24,
        "name": "オメガ",
        "cards": [
            {
                "name": "ブレイクカウントボム",
                "class": "standard"
            },
            {
                "name": "Ｄウェーブ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "アポロンフレイムＸ",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "ムーンディザスターＸ",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ストロングスイングＸ",
                "class": "standard"
            },
            {
                "name": "メテオライトＢ",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "Ａブレイザー",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ＢアイスハンマーＧＡ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "オックスファイアＧＡ",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ＢＥギャラクシー or ＲＧイレイザー",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "ハンマーウェポンＸ",
                "class": "standard"
            },
            {
                "name": "ジャイアントアックス",
                "class": "standard"
            },
            {
                "name": "オリガジェネラルＸ",
                "class": "standard"
            },
            {
                "name": "ドリルアームＸ",
                "class": "standard"
            },
            {
                "name": "グレイブジョーカーＧＡ",
                "class": "standard"
            },
            {
                "name": "サンダーボルトＢ",
                "class": "standard"
            },
            {
                "name": "ペインヘルフレイムＧＡ",
                "class": "standard"
            },
            {
                "name": "Ｅサイクロン",
                "class": "standard"
            },
            {
                "name": "ウォーロックブースト",
                "class": "standard"
            },
            {
                "name": "ブレイクサーベルＸ",
                "class": "standard"
            },
            {
                "name": "Ｇメテオレーザー",
                "class": "standard"
            }
        ],
        "access_code": "TNOCQQ"
    }
]
