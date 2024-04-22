# 使用官方Python镜像作为基础镜像
FROM python:3.12

# 设置工作目录
WORKDIR /app

COPY ../../../Test/approuteTest_1/backend/requirements.txt /app/

RUN pip install poetry

COPY ../../../Test/approuteTest_1/backend/pyproject.toml poetry.lock* /app/

RUN poetry config virtualenvs.create false \
    && poetry install --no-dev --no-interaction --no-ansi

COPY ../../../Test/approuteTest_1/backend /app

# 运行uwsgi服务器
CMD ["uwsgi", "--http", ":8000", "--module", "backend.wsgi"]
