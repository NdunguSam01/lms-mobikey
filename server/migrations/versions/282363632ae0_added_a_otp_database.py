"""Added a OTP database

Revision ID: 282363632ae0
Revises: 39b66a46f667
Create Date: 2024-03-01 19:29:23.706815

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '282363632ae0'
down_revision = '39b66a46f667'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('otp',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('otp', sa.String(), nullable=False),
    sa.Column('timestamp', sa.Date(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('otp')
    # ### end Alembic commands ###
