import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import { Categorys } from '@/routes/category.route';
import { Products } from './routes/product.route';

ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(), new Categorys(), new Products()]);

app.listen();
