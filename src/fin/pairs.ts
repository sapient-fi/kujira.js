import { ATOM, Denom, KUJI, USDC, USDT, USK, USK_TESTNET } from "../denom";
import { MAINNET, TESTNET } from "../network";
import { MARKETS_HARPOON, MARKETS_KAIYO } from "../usk";
import { Pair } from "./types";

export const STAKING = {
  [TESTNET]:
    "kujira1e7hxytqdg6v05f8ev3wrfcm5ecu3qyhl7y4ga73z76yuufnlk2rqd4uwf4",
  [MAINNET]:
    "kujira1p2j2cq4g3jjrz53ceku725t4uectn89hw35sehf8fpq9qfzvufeqymyem8",
};

export const PAIRS: Pair[] = [
  {
    address:
      "kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867",
    chainID: MAINNET,
    denoms: [KUJI, USDC],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
    pool: "kujira1sx99fxy4lqx0nv3ys86tkdrch82qygxyec5c8dxsk9raz4at5zpq72gypx",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira18v47nqmhvejx3vc498pantg8vr435xa0rt6x0m6kzhp6yuqmcp8s4x8j2c",
    chainID: MAINNET,
    denoms: [KUJI, ATOM],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: true,
    pool: "kujira13y8hs83sk0la7na2w5g5nzrnjjpnkvmd7e87yd35g8dcph7dn0ksenay2a",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira1xqhakgvn3jeqfade0z4aufer9xylx7ft45fgyhg6z75mauhkjwks9cucyq",
    chainID: MAINNET,
    denoms: [
      KUJI,
      Denom.from(
        "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1hfj06505jjk2ut5a0j6f5wx04pj2s05qk8nydng7kznkuzpe8w2se24jqx",
  },

  {
    address:
      "kujira193dzcmy7lwuj4eda3zpwwt9ejal00xva0vawcvhgsyyp5cfh6jyq66wfrf",
    chainID: MAINNET,
    denoms: [KUJI, USK],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
    pool: "kujira1g9xcvvh48jlckgzw8ajl6dkvhsuqgsx2g8u3v0a6fx69h7f8hffqaqu36t",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },
  {
    address:
      "kujira1rwx6w02alc4kaz7xpyg3rlxpjl4g63x5jq292mkxgg65zqpn5llq202vh5",
    chainID: MAINNET,
    denoms: [USDC, USK],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira12506pfme6layua70svszn2xza0pt9mnqu2u24lszrdyywmpvnw5qfz8sfq",
  },
  {
    address:
      "kujira1xut80d09q0tgtch8p0z4k5f88d3uvt8cvtzm5h3tu3tsy4jk9xlscem692",
    chainID: MAINNET,
    denoms: [USDT, USDC],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: true,
  },

  {
    address:
      "kujira1yum4v0v5l92jkxn8xpn9mjg7wuldk784ctg424ue8gqvdp88qzlqr2qp2j",
    chainID: MAINNET,
    denoms: [ATOM, USK],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
    pool: "kujira1yncutssgh2vj9scaymtteg949hwcft07c6qmgarxnaf04yesq3jsn6g2uv",
    margin: {
      market:
        "kujira1m0z0kk0qqug74n9u9ul23e28x5fszr628h20xwt6jywjpp64xn4qkxmjq3",
      fin_address:
        "kujira1yum4v0v5l92jkxn8xpn9mjg7wuldk784ctg424ue8gqvdp88qzlqr2qp2j",
      config:
        MARKETS_KAIYO.kujira1ecgazyd0waaj3g7l9cmy5gulhxkps2gmxu9ghducvuypjq68mq2smfdslf,
    },
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira158zzjcvkz7r3j5hueurcw22qrjerqw4dtrzlalztr7whjykjwvrsrahdnq",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/0306D6B66EAA2EDBB7EAD23C0EC9DDFC69BB43E80B398035E90FBCFEF3FD1A87"
      ),
      ATOM,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1a5fcczk37kks0zkg9znzf8pef83evwm230rejc8zmefrc48per5qcfwg65",
  },

  {
    address:
      "kujira172qjrk8g9l86w0shz4cc3e6rt5h9janaen4j4u6ze7xkjvjnaqfskwyyqm",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/F33B313325B1C99B646B1B786F1EA621E3794D787B90C204C30FE1D4D45970AE"
      ),
      Denom.from(
        "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1uamjserhcm82ek775wtt2q9vfkc8k2de4zzxh25xqjzxah4naqjqdmtcs6",
  },

  {
    address:
      "kujira1uvqk5vj9vn4gjemrp0myz4ku49aaemulgaqw7pfe0nuvfwp3gukq64r3ws",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/F33B313325B1C99B646B1B786F1EA621E3794D787B90C204C30FE1D4D45970AE"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira14qpyduhanevay6rhk3z308nwjxa83a8x37kmn5rct5x6kszj3gmqpuq7m6",
  },

  {
    address:
      "kujira1qqlk2773dvj8cyv3ftnzvyrknq78yryghp3uyumnumaxu656yreszrdph0",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/640E1C3E28FD45F611971DF891AE3DC90C825DF759DF8FAA8F33F7F72B35AD56"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1kgpsdn4gh24fpe5n8k4tvs5wn5s8w6825ewexkk7j2hq4467hf5s7qc23l",
  },

  {
    address:
      "kujira13l8gwanf37938wgfv5yktmfzxjwaj4ysn4gl96vj78xcqqxlcrgssfl797",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/D36D2BBE441D3605EEF340EAFAC57D669880597073050A2650B1468F1634A5F5"
      ),
      USK,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1kupjzlp96l4ypt0fdpse8slmkdkkz3g0t5evy033va0gvtw867sq0cm6q0",
  },

  {
    address:
      "kujira1fphguznhazgqdlr9mpfh6nmn3vjjr73ksz3ukznv6q7s9ndfq2cs8vhapj",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 12,
    multiswap: false,
    pool: "kujira1atnrjnyjm4u2znshlt48nwyeqtfyzuqseyj59lylvkvd4dtevdgss6jn4a",
  },

  {
    address:
      "kujira1ulyrqqtx9vqsk92805jk7xxwz77lszmm2f548juyced96tj4lg7qugewsf",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/301DAF9CB0A9E247CD478533EF0E21F48FF8118C4A51F77C8BC3EB70E5566DBC"
      ),
      USK,
    ],
    precision: { decimal_places: 2 },
    decimalDelta: 2,
    multiswap: false,
    pool: "kujira1g7597zvu8kte7jyg8e297sj363qwyp5mw4hr9cmv49r3dhv599jsdpx9qs",
  },

  {
    address:
      "kujira1a0fyanyqm496fpgneqawhlsug6uqfvqg2epnw39q0jdenw3zs8zqsjhdr0",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 12,
    multiswap: false,
    pool: "kujira196yp2agkqa4fqh0asg4lhn53t7fuw5fd8p3avktvy9j0qxf5zlmsz25v0n",
    margin: {
      market:
        "kujira1pep6vkkjexjlsw3y5h4tj27g7s58vkypy8zg7f9qdvlh2992pncqduz84n",
      fin_address:
        "kujira1a0fyanyqm496fpgneqawhlsug6uqfvqg2epnw39q0jdenw3zs8zqsjhdr0",
      config:
        MARKETS_KAIYO.kujira1f2jt3f9gzajp5uupeq6xm20h90uzy6l8klvrx52ujaznc8xu8d7s6av27t,
    },
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira1dtaqwlmzlk3jku5un6h6rfunttmwsqnfz7evvdf4pwr0wypsl68q49aaud",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/C01154C2547F4CB10A985EA78E7CD4BA891C1504360703A37E1D7043F06B5E1F"
      ),
      USK,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: true,
    pool: "kujira1rpqhczdrgaa6w0h9fukdcppme3074zcay8ge8lazwefdawp03vwsnpc7ya",
  },
  {
    address:
      "kujira1h7eenquygffwsmc8csrlx88zcddwx0aqspq3x2dsl20lwk4r9n2q9t86ht",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07"
      ),
      USK,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1vm99wnr4rpqtcyh4fw6q277x2j75r2q8yet3azd7fjecmst7ftds4vhzcd",
  },

  {
    address:
      "kujira1qw5hdcmcf4aq5xmnu6znscurvkgvhxfsyvhz3jvxhasxjwtk3l7sccwcs8",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/1603E8643A49AD47F536F645A4BF0E4C1E06C76F0A98CBE8054B177F1EE7C39A"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1ww9hyqjzuz7c90hhfkqrucnjtu2tj9myvnfxlzze92mkq9pvmmps4zumv9",
  },

  {
    address:
      "kujira10j648ftg2g8p5vhgsu5kzfh6d907vpkrn0a5l3qch479eqy2qssqm905c4",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/BBC45F1B65B6D3C11C3C56A9428D38C3A8D03944473791C52DFB7CD3F8342CBC"
      ),
      USK,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 2,
    multiswap: false,
    pool: "kujira1zr5ywldgav8tnlplw9wnu7evp66xvp3ttymdg2jnfgaktcw9lqxs8trkpc",
  },

  {
    address:
      "kujira18lm235jzuh4t7hh5z8lqyz08dmz67magj8z0fc4a0vn6c0hzk0es3r4glx",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/3914BDEF46F429A26917E4D8D434620EC4817DC6B6E68FB327E190902F1E9242"
      ),
      USK,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 12,
    multiswap: false,
    pool: "kujira1kggddmdvjjxl43luez7dp9snt96jwyj05k5hyxzstvj886u6entsu2na4z",
  },

  {
    address:
      "kujira1jlzw6xal0n2c580g3wxs09tjhlzdht9y8dgszq3tupf8fhl7xjus7ep7ap",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/B37E4D9FB5B30F3E1E20A4B2DE2A005E584C5C822C44527546556AE2470B4539"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 4,
    multiswap: false,
    pool: "kujira1uchf9h2suq6a9a0ksyp5rh9536uqxydswm37sswa888kxxx2kqgqsx3n6h",
    margin: {
      market:
        "kujira1hjyjafrt09p4hwsnwch29nrrs40lprfgesqdy44wnp27td872hsse2rree",
      fin_address:
        "kujira1jlzw6xal0n2c580g3wxs09tjhlzdht9y8dgszq3tupf8fhl7xjus7ep7ap",
      config:
        MARKETS_KAIYO.kujira1eydneup86kyhew5zqt5r7tkxefr3w5qcsn3ssrpcw9hm4npt3wmqa7as3u,
    },
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira17w9r23r8v8r7z5lphwj99296fhlye9ej5nq3hlqw554u63m88avspdl9tc",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7"
      ),
      USK,
    ],
    precision: { decimal_places: 2 },
    decimalDelta: 12,
    multiswap: false,
    pool: "kujira1xwvvjq5w0887v2vz4e83kcu38s0jq8q8lqa3z5hxm295q7y4uejqp24la7",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
    margin: {
      market:
        "kujira1m4ves3ymz5hyrj3war3t7uxu9ewt8rwpunja87960n0gre3a5pzspgry4g",
      fin_address:
        "kujira17w9r23r8v8r7z5lphwj99296fhlye9ej5nq3hlqw554u63m88avspdl9tc",
      config:
        MARKETS_KAIYO.kujira1fjews4jcm2yx7una77ds7jjjzlx5vgsessguve8jd8v5rc4cgw9s8rlff8,
    },
  },

  {
    address:
      "kujira1ky9kv2m4dnykm90d0lj5089k4efttgfpx34zyvkklxnew48c522sggqjsg",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/E67ADA2204A941CD4743E70771BA08E24885E1ADD6FD140CE1F9E0FEBB68C6B2"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 12,
    multiswap: false,
    pool: "kujira1ywlrdpqymukghjwhfyp2n98r49j56wej36n4l08egkdlwj4fn87ql2l2ey",
  },

  {
    address:
      "kujira1v8lkqws3gd6npr0rdk9ch54amh9guas86r4u62jq27hee88lryfsxwrvlk",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/53796B3762678CD80784A7DD426EB45B89C024BE3D45224CC83FDE3DED7DA0A1"
      ),
      USK,
    ],
    precision: { decimal_places: 5 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1hgq0fgqnv0dk2r474pfax3va86wfh9ffgdhx6q6jls00g7nv8vmsx2jnjt",
  },

  {
    address:
      "kujira18638dsuf7p3a2e23seqz8zegqrcpsdr5nw6j2a50qg6r3q8vn3qqrg9lzp",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/2F1447818CF99498AE62D9FB4D5E0C9FD48C68FC118C34D2ECFFFED0AD082196"
      ),
      USK,
    ],
    precision: { decimal_places: 5 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira13ta4a6cu29na9dch3rtyqasgx57ju3z98530cet46tn5v7sx6k2qg7g3zk",
  },

  {
    address:
      "kujira1ddeadmhum3umygv84frhc87gl2grzjmx9x8fuhjts7zqwuc39xuq53w3d8",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/5A3DCF59BC9EC5C0BB7AA0CA0279FC2BB126640CB8B8F704F7BC2DC42495041B"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 12,
    multiswap: false,
    pool: "kujira12knqz6rnf7jujyhnq7lvreyeylnts0n0vjfax4gnuvhsu5a9dm7qf687jv",
  },

  {
    address:
      "kujira1z7quf5t6g7spjnu2qhcp2x2ksnz4zfut9k73uutpg2q95dd008fqsprtvl",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira14sar6zdyljp7t9u5zwcwcjrw98kcmqq8685sz7ezfknvauqg23sqrmr6kg",
  },

  {
    address:
      "kujira12zjpumtfh88k6s2s8k4wks37ezr2c3zeha5xx6qpd65e5ehz50nq0afvrv",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/FC59D6840A41252352263CEA2B832BB86D68D03CBA194263CB9F3C15946796FB"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 12,
    multiswap: false,
    pool: "kujira1qjw6s2l0j54esx8swmgnf2509ydxqur53wna72ajyqlu3hrdrxgsf4d6jx",
  },

  {
    address:
      "kujira1sse6a00arh9dalzsyrd3q825dsn2zmrag0u4qx8q0dyks4ftnxyqrj0xds",
    chainID: MAINNET,
    denoms: [
      Denom.from("factory/kujira1swkuyt08z74n5jl7zr6hx0ru5sa2yev5v896p6/local"),
      USK,
    ],
    precision: { decimal_places: 5 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira10wn7s0j66f33kp8rg7cluh9mghkahd5wezkx84wn3kf0cvh2nefsny50r4",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira1k7rg9vscg2uldw6868mecryxhlze5e3f4z0f00295ddu7cz3l4ws4d9dfj",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/8318B7E036E50C0CF799848F23ED84778AAA8749D9C0BCD4FF3F4AF73C53387F"
      ),
      USK,
    ],
    precision: { decimal_places: 5 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1059pvpwgg9krqal5kwhnul47heekmuh0uj7ctns47whqegqj5l6q6nvs69",
  },

  {
    address:
      "kujira1zz74gvmq6ss3pg5vgahvx47ugpfzr80qu75l97lf2ggdgxq04ddqxkdzey",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1y0v5znl0ucc6nsdalr9xeg0r3zyw44yn0uyd8tsgc8gl4j8stjcs9vmmr7",
    margin: {
      market:
        "kujira1722g2rudg0rlw45nuuvjhg4a365xztfrdfjgyyfuzlmqmtu2plas34y6x3",
      fin_address:
        "kujira1zz74gvmq6ss3pg5vgahvx47ugpfzr80qu75l97lf2ggdgxq04ddqxkdzey",
      config:
        MARKETS_KAIYO.kujira1r80rh4t7zrlt8d6da4k8xptwywuv39esnt4ax7p7ca7ga7646xssrcu5uf,
    },
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira1v8kh6mqxq7awcvl936xeyzv8fnmdkd3yxggvkyek5d0ecut4a6zs0larj2",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/DBF6ABDB5F3D4267C039967515594453F4A31007FD838A566F563A01D2C2FB80"
      ),
      USK,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1daf7z9pyd7cwfmqd5tjnqqgsc0naus60cpn5e6ukwuqd06ywen3qy0s525",
  },

  {
    address:
      "kujira1rrnacml8zeqq3ve2t98r5x88t4uahahdk66y9qpcrjp9qxhnuvysv59zx8",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/A64467480BBE4CCFC3CF7E25AD1446AA9BDBD4F5BCB9EF6038B83D6964C784E6"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 12,
    multiswap: false,
    pool: "kujira10y2sxew858txsfufrv366hkdm5lgn8w6dkhtxv8mdsmh7z8yuzfq9tptmz",
  },

  {
    address:
      "kujira1rtpn4nxkx7u5y4uf5lp4ywrhmnms07p8p8wc3pmw53hfv0lhyxdqlfhgrt",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/B4DCACF7753C05040AF0A7BF2B583402C4B8C9B0A86FCECE32EF63CB7F0A46B3"
      ),
      USK,
    ],
    precision: { decimal_places: 2 },
    decimalDelta: 12,
    multiswap: false,
    pool: "kujira174ayynr8cjea63r8a4xj84kqjxlfa0e0l4jnk27p3hyvdk8z34eqj6gn9g",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira1w2l4w5p66l5t2nmrmsvz7k4cu50s7e8dc6h59gcxsnmp2tgy7q7s5lux8a",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1hrvxn66u46r47zxsd45jecvuyr3munl2d5xle9gnltpge3dqh7sqd64znl",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira1cduudfszcm9slm8qxlaqvnpzg2u0hkus94fe3pwt9x446dtw6eeql8ualz",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/21038E447A2D4A1183628C0EC366FE79C2E0B0BD91F9A85E6C906CD911FD676E"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 2,
    multiswap: false,
    pool: "kujira1r0sn3fcz2lda7hvs37rchnk4pq6jt5hjeqw7dcc765v39rhmv0tqj59760",
  },

  {
    address:
      "kujira1rpxf55u22q2tly9y8rgdrjgx9p52sus7jugaevj3hdt0z7sgvkcsyrhrv0",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira10sx8wxzev270zrmpq6z3asgpurdjfh9f6rwtgt55mar9m6gtw40s9nfxcy",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira1nm3yktzcgpnvwu6qpzqgl2ktyvlgsstc7ev849dd3ulaygw75mqqxvtnck",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602"
      ),
      USK,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1n648rfqqvjxm6c7zgfnfqay85rkapgg0z7da9pnmjazz5m5d7l0qxdtq90",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira1cn922pcqrt4g2dr4va9vxk8h3w3jfxnxjqq2qp6zktjsehdzde6sz66um0",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/239BFF83852F67DF5243DB89F339FF7FDBF858437F961CAB6DA5B5ADEFB2BC07"
      ),
      USK,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1hmy36p0a87fsv36l8vdmy5uaka69j392s07qgnc5aum9cg9vj88qq8tfgh",
  },

  {
    address:
      "kujira1538ukswznmuek3hfv7mcxem9hjqz8sa4ypl2ul0zncu3tdgfvwmq8pxkwp",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/A2146858B5E3CFE759E32F47CA54591F8E27FAEDFF731D30B448E5AB25CA8EC5"
      ),
      USK,
    ],
    precision: { decimal_places: 2 },
    decimalDelta: 3,
    multiswap: false,
    pool: "kujira1qmuthgsuvwtgw3dpddrvxjz09lt36zzurl2v657kmr52juekxarsaepvrx",
  },

  {
    address:
      "kujira1xr3rq8yvd7qplsw5yx90ftsr2zdhg4e9z60h5duusgxpv72hud3sl8nek6",
    chainID: MAINNET,
    denoms: [ATOM, USDC],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
    pool: "kujira14wv3whn3v9sgf8r0dm7a46v7m7pukhs87x73e0ude3ktuzztfj9qxndumz",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira1hulx7cgvpfcvg83wk5h96sedqgn72n026w6nl47uht554xhvj9nsra5j5u",
    chainID: MAINNET,
    denoms: [
      ATOM,
      Denom.from(
        "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },

  {
    address:
      "kujira1qjxu65ucccpg8c5kac8ng6yxfqq85fluwd0p9nt74g2304qw8eyq930y7w",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/004EBF085BBED1029326D56BE8A2E67C08CECE670A94AC1947DF413EF5130EB2"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 12,
    multiswap: false,
  },

  {
    address:
      "kujira12jdezs3kk6y04q3fnl7kq5567pcw0zfr7j0yfsxjqgggdkktut9s2gm7cm",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/301DAF9CB0A9E247CD478533EF0E21F48FF8118C4A51F77C8BC3EB70E5566DBC"
      ),
      USDC,
    ],
    precision: { decimal_places: 2 },
    decimalDelta: 2,
    multiswap: false,
    pool: "kujira19ca3j7wj672hnvzs7vj73hlt0u94zc0lpehkx8w5g8crm0sfx4nqvt44f6",
  },

  {
    address:
      "kujira1apkgj87fgfsq84swvkyfaemrq7t4deuh60887lek0hkgdjh5fj0qaz7fhx",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/DADB399E742FCEE71853E98225D13E44E90292852CD0033DF5CABAB96F80B833"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 12,
    multiswap: false,
    pool: "kujira1d4h7hnnn5na2zy9lh7k4atjscj9sxtpj7avnyelykgd22e5kyh2qpnsd5n",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira16y344e8ryydmeu2g8yyfznq79j7jfnar4p59ngpvaazcj83jzsms6tju67",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/3607EB5B5E64DD1C0E12E07F077FF470D5BC4706AFCBC98FE1BA960E5AE4CE07"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },

  {
    address:
      "kujira1w4t2qpwvhyhz0g2mwgqjzgsw63dcy5hkfch0tgr8xj9qjcsauq8q5x0zxz",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/B37E4D9FB5B30F3E1E20A4B2DE2A005E584C5C822C44527546556AE2470B4539"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 4,
    multiswap: true,
    pool: "kujira1337sclk2nc6srd77w4v8qule0nv9r70mrt56r2j8zak3rlg6xc0sl27tar",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/1B38805B1C75352B28169284F96DF56BDEBD9E8FAC005BDCC8CF0378C82AA8E7"
      ),
      USDC,
    ],
    precision: { decimal_places: 2 },
    decimalDelta: 12,
    multiswap: false,
    pool: "kujira1ngqlypl5h0mkgxmk4why878eq4y5yh6yhdtrw8hdxfz202xluzrs097qn5",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira182nff4ttmvshn6yjlqj5czapfcav9434l2qzz8aahf5pxnyd33tsz30aw6",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/F3AA7EF362EC5E791FE78A0F4CCC69FEE1F9A7485EB1A8CAB3F6601C00522F10"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 12,
    multiswap: false,
  },

  {
    address:
      "kujira1z7asfxkwv0t863rllul570eh5pf2zk07k3d86ag4vtghaue37l5s9epdvn",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/EFF323CC632EC4F747C61BCE238A758EFDB7699C3226565F7C20DA06509D59A5"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira10fqy0npt7djm8lg847v9rqlng88kqfdvl8tyt4ge204wf52sy68qwmj07l",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/8318B7E036E50C0CF799848F23ED84778AAA8749D9C0BCD4FF3F4AF73C53387F"
      ),
      USDC,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira1yg8930mj8pk288lmkjex0qz85mj8wgtns5uzwyn2hs25pwdnw42skp0kur",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/DA59C009A0B3B95E0549E6BF7B075C8239285989FF457A8EDDBB56F10B2A6986"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
    pool: "kujira1hs0fmdp9m0udkm7f63z9l92c5z6qa44hg7gcn3kwwrcn8nkdq7vsx79u97",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira149m52kn7nvsg5nftvv4fh85scsavpdfxp5nr7zasz97dum89dp5qevttd9",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/DBF6ABDB5F3D4267C039967515594453F4A31007FD838A566F563A01D2C2FB80"
      ),
      USDC,
    ],
    precision: { decimal_places: 4 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira1snkjjse7z9m72pcegjhw8ggqgdswqwuguq07f2um4ypthle9h47qcz2jkq",
  },

  {
    address:
      "kujira1aakfpghcanxtc45gpqlx8j3rq0zcpyf49qmhm9mdjrfx036h4z5sfmexun",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/47BD209179859CDE4A2806763D7189B6E6FE13A17880FE2B42DE1E6C1E329E23"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira12p30cr4gstmp2yucwxtaq92turrzsxxar8upz3rhmfjxh6gdgk4s5vsyse",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/B4DCACF7753C05040AF0A7BF2B583402C4B8C9B0A86FCECE32EF63CB7F0A46B3"
      ),
      USDC,
    ],
    precision: { decimal_places: 2 },
    decimalDelta: 12,
    multiswap: false,
    pool: "kujira1mjdmut3vq7n7zv6p9kdkdng0zpk2286qww0yy0ay4e8cvxd5p2zqvh9aqs",
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira1fkwjqyfdyktgu5f59jpwhvl23zh8aav7f98ml9quly62jx2sehysqa4unf",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/A358D7F19237777AF6D8AD0E0F53268F8B18AE8A53ED318095C14D6D7F3B2DB5"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira1jkte0pytr85qg0whmgux3vmz9ehmh82w40h8gaqeg435fnkyfxqq5m32qy",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/4F393C3FCA4190C0A6756CE7F6D897D5D1BE57D6CCB80D0BC87393566A7B6602"
      ),
      USDC,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
    calc: "kujira1e6fjnq7q20sh9cca76wdkfg69esha5zn53jjewrtjgm4nktk824stzyysu",
  },

  {
    address:
      "kujira17qp8g5n5wwelrsnfdakrv0p550nzg72agpcz5t0ea6thlqd300hquxljcc",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "ibc/A2146858B5E3CFE759E32F47CA54591F8E27FAEDFF731D30B448E5AB25CA8EC5"
      ),
      USDC,
    ],
    precision: { decimal_places: 2 },
    decimalDelta: 3,
    multiswap: false,
    pool: "kujira1gp35at6c4t4pdeslyewf3l7x5hw6qfls7tlqg4dpp6pepc89zqequm8t8p",
  },

  {
    address:
      "kujira1gl8js9zn7h9u2h37fx7qg8xy65jrk9t4zpa6s7j5hdlanud2uwxshqq67m",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "factory/kujira13y8hs83sk0la7na2w5g5nzrnjjpnkvmd7e87yd35g8dcph7dn0ksenay2a/ulp"
      ),
      ATOM,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: false,
  },

  {
    address:
      "kujira1hs95lgvuy0p6jn4v7js5x8plfdqw867lsuh5xv6d2ua20jprkgesw2pujt",
    chainID: MAINNET,
    denoms: [
      Denom.from(
        "factory/kujira13y8hs83sk0la7na2w5g5nzrnjjpnkvmd7e87yd35g8dcph7dn0ksenay2a/ulp"
      ),
      KUJI,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: false,
  },

  {
    address:
      "kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg",
    chainID: TESTNET,
    denoms: [
      Denom.from("factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"),
      USK_TESTNET,
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
    margin: {
      market:
        "kujira1vmnntr773a5p7s4k0t39v6vcgcq87kq2zaw94cy85850n79jx2kq56sqhs",
      limit:
        "kujira1g38pvehdv63la2ev30k0u4mayv5ml8n9ajq5lqc0a070xf25hsssf9ux7w",
      fin_address:
        "kujira14sa4u42n2a8kmlvj3qcergjhy6g9ps06rzeth94f2y6grlat6u6ssqzgtg",
      config:
        MARKETS_HARPOON.kujira1atk8uwy6zf7u4r4qzg52ucgz6f74cuclthzsrc049vynjsr62lns2du3ey,
    },
    pool: "kujira1a9fha3f02xyzvmanxxl4p3djrnp40ewwkrfkm4gr0exlv028ze3slhv4fn",
    queue: "kujira1cwtczwdsj8ewz5p6zzvlfee77xw959r8amtnh2fcul9vdz3tr4hslpz4m5",
  },

  {
    address:
      "kujira12cks8zuclf9339tnanpdd8z8ycf5ygdgy885sejc7kyhvryzfyzsvjpasw",
    chainID: TESTNET,
    denoms: [
      Denom.from(
        "ibc/784AEA7C1DC3C62F9A04EB8DC3A3D1DCB7B03BA8CB2476C5825FA0C155D3018E"
      ),
      USK_TESTNET,
    ],
    precision: { decimal_places: 0 },
    decimalDelta: 8,
    multiswap: true,
  },

  {
    address:
      "kujira1wl003xxwqltxpg5pkre0rl605e406ktmq5gnv0ngyjamq69mc2kqm06ey6",
    chainID: TESTNET,
    denoms: [KUJI, USK_TESTNET],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: false,
    pool: "kujira16ethwy4fkjn7ymd04ect2wwlq7pwtlxdzw3zg5nvw8smmwsks49sqjg326",
  },

  {
    address:
      "kujira1suhgf5svhu4usrurvxzlgn54ksxmn8gljarjtxqnapv8kjnp4nrsqq4jjh",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from("factory/kujira1ltvwg69sw3c5z99c6rr08hal7v0kdzfxz07yj5/demo"),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
    pool: "kujira19kxd9sqk09zlzqfykk7tzyf70hl009hkekufq8q0ud90ejtqvvxs8xg5cq",
    queue: "kujira19m8s6ru20s62ygyr5qdng8yw2la3lemy8rgt55q38hyl57taxmvsgfre6m",
    calc: "kujira18g945dfs4jp8zfu428zfkjz0r4sasnxnsnye5m6dznvmgrlcecpsyrwp7c",
  },
  {
    address:
      "kujira10qt8wg0n7z740ssvf3urmvgtjhxpyp74hxqvqt7z226gykuus7eqedsw8k",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from(
        "ibc/F91EA2C0A23697A1048E08C2F787E3A58AC6F706A1CD2257A504925158CFC0F3"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9sl4e867",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from(
        "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gqx97zgq",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from(
        "ibc/A1E1A20C1E4F2F76F301DA625CC476FBD0FCD8CA94DAF60814CA5257B6CD3E3E"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira1pvrwmjuusn9wh34j7y520g8gumuy9xtl3gvprlljfdpwju3x7ucseu6vw3",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from(
        "ibc/85CE72EE820A66F0ABD5EE3907A34E243E4BE2D6CFAEB4C08DF85BD6C0784FA2"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  {
    address:
      "kujira1yyca08xqdgvjz0psg56z67ejh9xms6l436u8y58m82npdqqhmmtqdyphsd",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from(
        "ibc/0607DD7B560C5E40B0E05CB30AECBD12514539D7C986D040FFDEAA0AE9911088"
      ),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 12,
    multiswap: true,
  },
  {
    address:
      "kujira1chejx4qqtvwxy6684yrsmf6pylancxqhk3vsmtleg5ta3zrffljq4xf685",
    chainID: TESTNET,
    denoms: [
      KUJI,
      Denom.from("factory/kujira12w0ua4eqnkk0aahtnjlt6h3dhxael6x25s507w/local"),
    ],
    precision: { decimal_places: 3 },
    decimalDelta: 0,
    multiswap: true,
  },
  // USDCet-UST
  // {
  //   address: "terra17psckgayzuuvf5e4ywdl4y6sufy6h55xeczqaq",
  //   chainID: "columbus-5",
  //   denoms: [
  //     Denom.from("terra1pepwcav40nvj3kh60qqgrk8k07ydmc00xyat06"),
  //     Denom.from("uusd"),
  //   ],
  //   precision: { decimal_places: 4 },
  // },
];
