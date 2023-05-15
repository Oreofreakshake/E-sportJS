const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

//staff auths

let refreshTokens = [];

router.post("/refresh", (req, res) => {
    //take the refresh token from the user
    const refreshToken = req.body.token;

    //send error if there is no token or it's invalid
    if (!refreshToken)
        return res.status(401).json("You are not authenticated!");
    if (!refreshTokens.includes(refreshToken)) {
        return res.status(403).json("Refresh token is not valid!");
    }
    jwt.verify(refreshToken, "myRefreshSecretKey", (err, user) => {
        err && console.log(err);
        refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

        const newAccessToken = generateAccessToken(user);
        const newRefreshToken = generateRefreshToken(user);

        refreshTokens.push(newRefreshToken);

        res.status(200).json({
            accessToken: newAccessToken,
            refreshToken: newRefreshToken,
        });
    });

    //if everything is ok, create new access token, refresh token and send to user
});

const generateAccessToken = (user) => {
    return jwt.sign({ id: user.id }, "mySecretKey", {
        expiresIn: "100000s",
    });
};

const generateRefreshToken = (user) => {
    return jwt.sign({ id: user.id }, "myRefreshSecretKey");
};

router.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = prisma.staff.findUnique((u) => {
        return u.username === username && u.password === password;
    });
    if (user) {
        //Generate an access token
        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);
        refreshTokens.push(refreshToken);
        res.json({
            username: user.username,
            accessToken,
            refreshToken,
        });
    } else {
        res.status(400).json("Username or password incorrect!");
    }
});

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, "mySecretKey", (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid!");
            }

            req.user = user;
            next();
        });
    } else {
        res.status(401).json("You are not authenticated!");
    }
};

router.post("/logout", verify, (req, res) => {
    const refreshToken = req.body.token;
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    res.status(200).json("You logged out successfully.");
});

// =========================================================================================================

// posts

router.get("/posts", verify, async (req, res, next) => {
    try {
        const posts = await prisma.post.findMany({});
        res.json(posts);
    } catch (error) {
        next(error);
    }
});

router.post("/posts", async (req, res, next) => {
    try {
        const post = await prisma.post.create({
            data: req.body,
        });
        res.json({ status: res.status, success: "created" });
    } catch (error) {
        res.json({ error: error });
    }
});

// reject

router.get("/rejects", verify, async (req, res, next) => {
    try {
        const rejectedPosts = await prisma.reject.findMany({});
        res.json(rejectedPosts);
    } catch (error) {
        next(error);
    }
});

router.post("/rejects", verify, async (req, res, next) => {
    try {
        const rejectedPost = await prisma.reject.create({
            data: req.body,
        });
        res.json({ status: res.status, success: "created" });
    } catch (error) {
        res.json({ error: error });
    }
});

// accept

router.get("/accepts", verify, async (req, res, next) => {
    try {
        const acceptedPosts = await prisma.accept.findMany({});
        res.json(acceptedPosts);
    } catch (error) {
        next(error);
    }
});

router.post("/accepts", verify, async (req, res, next) => {
    try {
        const acceptedPost = await prisma.accept.create({
            data: req.body,
        });
        res.json({ status: res.status, success: "created" });
    } catch (error) {
        res.json({ error: error });
    }
});

module.exports = router;
